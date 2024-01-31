import os
from fastapi import APIRouter
from pymongo import MongoClient
from controllers.seller_controller import seller_controller
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient

load_dotenv()

# router = APIRouter()
# seller_controller = seller_controller()

client = AsyncIOMotorClient(os.environ.get("MONGO_DB_URL"))

class seller_routes:
    def __init__(self):
        self.__router = APIRouter()
        self.__seller_controller = seller_controller(client)
        self.config_routes()
        
    def config_routes(self):
        self.__router.add_api_route("/", self.__seller_controller.get_all_sellers, methods=["GET"])
        self.__router.add_api_route("/", self.__seller_controller.create_seller, methods=["POST"])
        self.__router.add_api_route("/", self.__seller_controller.update_seller, methods=["PUT"])
        self.__router.add_api_route("/{seller_id}", self.__seller_controller.delete_seller, methods=["DELETE"])
        self.__router.add_api_route("/get_by_seller_id/{seller_id}", self.__seller_controller.get_seller_by_seller_id, methods=["GET"])
        self.__router.add_api_route("/get_by_seller_contact/{seller_contact}", self.__seller_controller.get_seller_by_seller_contact, methods=["GET"])
        
    def get_router(self):
        return self.__router
    
# ==================================================================================================

# @router.get("/")
# async def get_all_customers():
#     return await customer_controller.get_all_customers()

# @router.post("/", callbacks=)
# async def save_customer():
#     # Assuming saveCustomer method requires some request data, you can access it via request body
#     # For example: request_data = await request.json()
#     # Then pass request_data to the controller method
#     return await customer_controller.save_customer()

# @router.put("/")
# async def update_customer():
#     # Similar to the post route, handle request data if required
#     return await customer_controller.update_customer()

# @router.delete("/{customerID}")
# async def delete_customer(customerID: str):
#     return await customer_controller.delete_customer(customerID)

# @router.get("/getByCustomerID/{customerID}")
# async def search_customer_by_customerID(customerID: str):
#     return await customer_controller.search_customer_by_customerID(customerID)

# @router.get("/getByContactNumber/{contactNumber}")
# async def search_customer_by_contactNumber(contactNumber: str):
#     return await customer_controller.search_customer_by_contactNumber(contactNumber)