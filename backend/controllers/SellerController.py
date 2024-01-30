from pymongo import MongoClient
from bson.objectid import ObjectId
from backend.models.seller_model import Seller

class SellerController:
    def __init__(self, client):
        self.client = client
        self.db = client['your_database_name']
        self.collection = self.db['customers']

    # Create an User
    def create_seller(self, seller_data: Seller):
        # seller_data["createdAt"]=datetime.datetime.utcnow()
        new_seller_object = Seller(
                                seller_data.seller_id, 
                                seller_data.seller_name, 
                                seller_data.seller_contact_01, 
                                seller_data.seller_contact_02, 
                                seller_data.seller_address, 
                                seller_data.seller_email
                                )
        
        result = self.collection.insert_one(new_seller_object)
        return result.inserted_id

    # Updated an User
    def update_seller(self, seller_id, seller_update_data: Seller):
        # update_data['updated_at'] = datetime.datetime.utcnow()
        result = self.collection.update_one({"_id": ObjectId(seller_id)}, {"$set": seller_update_data})
        return result.modified_count

    # Get all Users
    def get_seller(self, seller_id):
        return self.collection.find_one({"_id": ObjectId(seller_id)})

    # Delete an User
    def delete_seller(self, seller_id):
        result = self.collection.delete_one({"_id": ObjectId(seller_id)})
        return result.deleted_count

# Usage
client = MongoClient('mongodb://localhost:27017/') # Connect to MongoDB
customer_manager = SellerController(client)

# =========================================================================================================================================

# # Create a new customer
# customer_id = customer_manager.create_customer("123", "John Doe", "123 Main St", "1234567890", "john@example.com")

# # Get a customer
# customer = customer_manager.get_customer(customer_id)
# print(customer)

# # Update a customer
# update_data = {"customerName": "Jane Doe", "address": "456 Elm St"}
# customer_manager.update_customer(customer_id, update_data)

# # Delete a customer
# customer_manager.delete_customer(customer_id)
