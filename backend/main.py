from typing import Union
from fastapi import FastAPI, Request
import uvicorn
from dotenv import load_dotenv
import os
from fastapi.middleware.cors import CORSMiddleware
import pickle
import numpy as np
import warnings

load_dotenv()
app = FastAPI()
baseURL = "/api/v1"
model = None
feature_names = ['Baths', 'Land size', 'Beds', 'House size', 'Lat', 'Lon']

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

async def predict_price_with_feature_names(model, X, feature_names=None):
    # Suppress the UserWarning about missing feature names
    with warnings.catch_warnings():
        if feature_names:
            warnings.simplefilter("ignore")
            return model.predict(X)
        
def load_the_model():
    global model
    filename = 'model/model_dump/house_price_predictor.pickle'
    
    with open(filename, 'rb') as file:
        model = pickle.load(file)

@app.get(baseURL+"/")
async def read_root():
    return {"Hello": "World"}

# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}

@app.post(baseURL+"/predict_house_price")
async def predict_house_price(request: Request):
    # Parse the Json data payload from request body
    request_payload = await request.json()
    houseName, houseAddress, bedrooms, bathrooms, houseArea, houseAge, kitchens, garden, lat, lng, landSize = request_payload.values()
    
    # print("houseName", "houseAddress", "bedrooms", "bathrooms", "houseArea", "houseAge", "kitchens", "garden")
    # print(houseName, houseAddress, bedrooms, bathrooms, houseArea, houseAge, kitchens, garden)
    
    global model
    predicted_house_value = await predict_price_with_feature_names(model, [[bathrooms, landSize, bedrooms, houseArea, lat, lng]], feature_names)
    predicted_house_value = np.round(predicted_house_value[0], 2)
    
    return { "message": "Successfully Predicted Your House Price", "response": predicted_house_value }

if __name__ == "__main__":
    load_the_model()
    uvicorn.run(app, host=os.environ.get("SERVER_HOST"), port=int(os.environ.get("SERVER_PORT")))
    