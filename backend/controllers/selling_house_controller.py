from models.seller_model import Seller 
import asyncio
from fastapi.responses import JSONResponse

class selling_house_controller:
    def __init__(self, client):
        self.client = client
        self.db = client['House-Selling-Price-Prediction-DB']
        self.collection = self.db['selling_houses']