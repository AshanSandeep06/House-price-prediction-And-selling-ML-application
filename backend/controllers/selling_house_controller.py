import asyncio
from fastapi.responses import JSONResponse
from models.selling_house_model import SellingHouse

class selling_house_controller:
    def __init__(self, client):
        self.client = client
        self.db = client['House-Selling-Price-Prediction-DB']
        self.collection = self.db['selling_houses']
        
    # Generate New Selling ID
    async def generate_new_selling_ID(self):
         # Aggregate to get the last selling ID
        pipeline = [
            {"$group": {"_id": None, "max_id": {"$max": "$sellingID"}}}
        ]
        result = await self.collection.aggregate(pipeline).to_list(None)
        
        if (result):
            lastSellingID = result[0]['max_id']
            firstString = lastSellingID.split('-')[0]
            new_selling_id = 0
              
            secondNumber = int(lastSellingID.split('-')[1])
            secondNumber = secondNumber + 1
            if(secondNumber < 10):
                new_selling_id = firstString+"-00"+secondNumber
            elif(secondNumber < 100):
                new_selling_id = firstString+"-0"+secondNumber
            elif(secondNumber < 1000):
                new_selling_id = firstString+"-"+secondNumber

            response = {"code": "00", "message": "New Selling ID has been generated successfully..!", "content": new_selling_id}
            return JSONResponse(status_code=200, content=response, media_type="application/json")

        else:
            new_selling_id = "SID-001"
            response = {"code": "00", "message": "First Selling ID has been generated successfully..!", "content": new_selling_id}
            return JSONResponse(status_code=200, content=response, media_type="application/json")

    # Save House Listing
    async def save_house_listing(self, house_listing_details: SellingHouse):
        print(house_listing_details)
        # try:
        #     seller_id = seller_data.seller_id
        #     seller_name = seller_data.seller_name
        #     seller_contact_01 = seller_data.seller_contact_01
        #     seller_contact_02 = seller_data.seller_contact_02
        #     seller_address = seller_data.seller_address
        #     seller_email = seller_data.seller_email
            
        #     seller = await self.collection.find_one({"seller_id": seller_id})
        #     if not seller:
        #         new_seller_obj = Seller(
        #             seller_id=seller_id,
        #             seller_name=seller_name,
        #             seller_contact_01=seller_contact_01,
        #             seller_contact_02=seller_contact_02,
        #             seller_address=seller_address,
        #             seller_email=seller_email
        #         )
        #         await self.collection.insert_one(new_seller_obj.dict())
        #     else:
        #         response = {"code": "01", "message": f"This {seller_id} - Seller is Already Exist, Therefore can't be Added", "content": None}
        #         return JSONResponse(status_code=500, content=response, media_type="application/json")
            
        #     response = {"code": "00", "message": "Seller has been Successfully Saved..!", "content": None}
        #     return JSONResponse(status_code=200, content=response, media_type="application/json")
        
        # except Exception as e:
        #     response = {"code": "02", "message": str(e), "content": None}
        #     return JSONResponse(status_code=500, content=response, media_type="application/json")

    # Save House Images
    async def save_house_images(self, seller_update_data):
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