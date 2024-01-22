from typing import Union
from fastapi import FastAPI
import uvicorn
from dotenv import load_dotenv
import os

load_dotenv()
app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

if __name__ == "__main__":
    uvicorn.run(app, host=os.environ.get("SERVER_HOST"), port=int(os.environ.get("SERVER_PORT")))
    