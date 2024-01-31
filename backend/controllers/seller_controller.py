from models.seller_model import Seller 
import asyncio
from fastapi.responses import JSONResponse

class seller_controller:
    def __init__(self, client):
        self.client = client
        self.db = client['House-Selling-Price-Prediction-DB']
        self.collection = self.db['sellers']

    async def get_all_sellers(self):
        all_sellers_cursor = self.collection.find()
        all_sellers = [seller async for seller in all_sellers_cursor]
        if all_sellers.__len__ == 0:
            response = {"code": "00", "message": "No Sellers Found..!", "content": []}
            return JSONResponse(status_code=200, content=response, media_type="application/json")
        else:
            for seller in all_sellers:
                seller['_id'] = str(seller['_id'])  # Convert ObjectId to string
            
            response = {"code": "00", "message": "All Sellers were Loaded..!", "content": all_sellers}
            return JSONResponse(status_code=200, content=response, media_type="application/json")

    async def create_seller(self, seller_data: Seller):
        try:
            seller_id = seller_data.seller_id
            seller_name = seller_data.seller_name
            seller_contact_01 = seller_data.seller_contact_01
            seller_contact_02 = seller_data.seller_contact_02
            seller_address = seller_data.seller_address
            seller_email = seller_data.seller_email
            
            seller = await self.collection.find_one({"seller_id": seller_id})
            if not seller:
                new_seller_obj = Seller(
                    seller_id=seller_id,
                    seller_name=seller_name,
                    seller_contact_01=seller_contact_01,
                    seller_contact_02=seller_contact_02,
                    seller_address=seller_address,
                    seller_email=seller_email
                )
                await self.collection.insert_one(new_seller_obj.dict())
            else:
                response = {"code": "01", "message": f"This {seller_id} - Seller is Already Exist, Therefore can't be Added", "content": None}
                return JSONResponse(status_code=500, content=response, media_type="application/json")
            
            response = {"code": "00", "message": "Seller has been Successfully Saved..!", "content": None}
            return JSONResponse(status_code=200, content=response, media_type="application/json")
        
        except Exception as e:
            response = {"code": "02", "message": str(e), "content": None}
            return JSONResponse(status_code=500, content=response, media_type="application/json")

    # Updated an User
    async def update_seller(self, seller_update_data: Seller):
        try:
            seller_id = seller_update_data.seller_id
            seller_name = seller_update_data.seller_name
            seller_contact_01 = seller_update_data.seller_contact_01
            seller_contact_02 = seller_update_data.seller_contact_02
            seller_address = seller_update_data.seller_address
            seller_email = seller_update_data.seller_email
            
            seller = await self.collection.find_one({"seller_id": seller_id})
            if seller:
                updated_seller_obj = {
                    "seller_id": seller_id,
                    "seller_name": seller_name,
                    "seller_contact_01": seller_contact_01,
                    "seller_contact_02": seller_contact_02,
                    "seller_address": seller_address,
                    "seller_email": seller_email
                }
                result = await self.collection.update_one({"seller_id": seller_id}, {"$set": updated_seller_obj})
                
                if result.matched_count:
                    response = {"code": "00", "message": "Seller has been Successfully Updated..!", "content": None}
                    return JSONResponse(status_code=200, content=response, media_type="application/json")
                else:
                    response = {"code": "01", "message": "Something went wrong..!", "content": None}
                    return JSONResponse(status_code=500, content=response, media_type="application/json")
                
            else:
                response = {"code": "01", "message": f"There is no Seller with this ID - {seller_id}, Therefore can't be Updated", "content": None}
                return JSONResponse(status_code=500, content=response, media_type="application/json")
        
        except Exception as e:
            response = {"code": "02", "message": str(e), "content": None}
            return JSONResponse(status_code=500, content=response, media_type="application/json")


    # Get a specific User by Seller ID
    async def get_seller_by_seller_id(self, seller_id: str):
        try:            
            seller = await self.collection.find_one({"seller_id": seller_id})
            if seller:
                seller['_id'] = str(seller['_id'])  # Convert ObjectId to string
                response = {"code": "00", "message": f"Seller - {seller_id} details has been loaded", "content": seller}
                return JSONResponse(status_code=200, content=response, media_type="application/json")
                
            else:
                response = {"code": "00", "message": f"There is no Seller with this ID - {seller_id}", "content": seller}
                return JSONResponse(status_code=500, content=response, media_type="application/json")
        
        except Exception as e:
            response = {"code": "02", "message": str(e), "content": None}
            return JSONResponse(status_code=500, content=response, media_type="application/json")
    
    # Get a specific User by Seller Contact number
    async def get_seller_by_seller_contact(self, seller_contact: str):
        try:
            seller = await self.collection.find_one({"$or": [{"seller_contact_01": seller_contact}, {"seller_contact_02": seller_contact}]})
            if seller:
                seller['_id'] = str(seller['_id'])  # Convert ObjectId to string
                response = {"code": "00", "message": f"Seller details have been loaded", "content": seller}
                return JSONResponse(status_code=200, content=response)
            
            else:
                response = {"code": "00", "message": f"There is no Seller with this Contact Number - {seller_contact}", "content": None}
                return JSONResponse(status_code=500, content=response)
            
        except Exception as e:
            response = {"code": "02", "message": str(e), "content": None}
            return JSONResponse(status_code=500, content=response)
        
    # Delete an User
    async def delete_seller(self, seller_id):
        try:
            seller = await self.collection.find_one({"seller_id": seller_id})
            if seller:
                result = await self.collection.delete_one({"seller_id": seller_id})
                
                if result.deleted_count:
                    response = {"code": "00", "message": "Seller has been Successfully Deleted..!", "content": None}
                    return JSONResponse(status_code=200, content=response, media_type="application/json")
                else:
                    response = {"code": "01", "message": "Something went wrong..!", "content": None}
                    return JSONResponse(status_code=500, content=response, media_type="application/json")
                
            else:
                response = {"code": "01", "message": f"There is no Seller with this ID - {seller_id}, Therefore can't delete the Seller..!", "content": None}
                return JSONResponse(status_code=500, content=response, media_type="application/json")
        
        except Exception as e:
            response = {"code": "02", "message": str(e), "content": None}
            return JSONResponse(status_code=500, content=response, media_type="application/json")
