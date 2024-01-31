import os
from fastapi import APIRouter
from pymongo import MongoClient
from controllers.selling_house_controller import selling_house_controller
from dotenv import load_dotenv
from index import client

load_dotenv()

class selling_house_routes:
    def __init__(self):
        self.__router = APIRouter()
        self.__selling_house_controller = selling_house_controller(client)
        self.config_routes()
        
    def config_routes(self):
        self.__router.add_api_route("/", self.__selling_house_controller.get_all_sellers, methods=["GET"])
        self.__router.add_api_route("/", self.__seller_co__selling_house_controllerntroller.create_seller, methods=["POST"])
        self.__router.add_api_route("/", self.__selling_house_controller.update_seller, methods=["PUT"])
        self.__router.add_api_route("/{seller_id}", self.__selling_house_controller.delete_seller, methods=["DELETE"])
        self.__router.add_api_route("/get_by_seller_id/{seller_id}", self.__selling_house_controller.get_seller_by_seller_id, methods=["GET"])
        self.__router.add_api_route("/get_by_seller_contact/{seller_contact}", self.__selling_house_controller.get_seller_by_seller_contact, methods=["GET"])
        
    def get_router(self):
        return self.__router