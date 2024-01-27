from typing import Union
from fastapi import FastAPI
import uvicorn
from dotenv import load_dotenv
import os
from fastapi.middleware.cors import CORSMiddleware
import ml_house_price_prediction_model
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

def predict_price_with_feature_names(model, X, feature_names=None):
    # Suppress the UserWarning about missing feature names
    with warnings.catch_warnings():
        if feature_names:
            warnings.simplefilter("ignore")
            return model.predict(X)
        
def loadTheModel():
    global model
    filename = 'model/model_dump/house_price_predictor.pickle'
    
    with open(filename, 'rb') as file:
        model = pickle.load(file)

@app.get(baseURL+"/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.post(baseURL+"/predict_house_price")
def predict_house_price():
    global model
    
    predicted_house_value = predict_price_with_feature_names(model, [[1, 50.0, 3, 1600.0, 80.500000, 6.166670]], feature_names)
    predicted_house_value = np.round(predicted_house_value[0], 2)
    
    return { "message": "Successfully Predicted Your House Price", "response": predicted_house_value }

if __name__ == "__main__":
    loadTheModel()
    uvicorn.run(app, host=os.environ.get("SERVER_HOST"), port=int(os.environ.get("SERVER_PORT")))
    