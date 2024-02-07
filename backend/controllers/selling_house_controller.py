import asyncio
from fastapi.responses import JSONResponse
from models.selling_house_model import SellingHouse
from fastapi import UploadFile, File, HTTPException
from typing import List

class selling_house_controller:
    def __init__(self, client):
        self.client = client
        self.db = client['House-Selling-Price-Prediction-DB']
        self.collection = self.db['selling_houses']
        
    # Generate New Selling ID
    async def generate_new_selling_ID(self):
        try:
            # Aggregate to get the last selling ID
            pipeline = [{"$group": {"_id": None, "max_id": {"$max": "$selling_id"}}}]
            result = await self.collection.aggregate(pipeline).to_list(None)

            if result and result[0]['max_id']:
                lastSellingID = result[0]['max_id']
                firstString = lastSellingID.split('-')[0]
                new_selling_id = 0
                
                secondNumber = int(lastSellingID.split('-')[1])
                secondNumber = secondNumber + 1
                if secondNumber < 10:
                    new_selling_id = f"{firstString}-00{secondNumber}"
                elif secondNumber < 100:
                    new_selling_id = f"{firstString}-0{secondNumber}"
                elif secondNumber < 1000:
                    new_selling_id = f"{firstString}-{secondNumber}"

                response = {"code": "00", "message": "New Selling ID has been generated successfully..!", "content": new_selling_id}
                return JSONResponse(status_code=200, content=response, media_type="application/json")
            else:
                new_selling_id = "SID-001"
                response = {"code": "00", "message": "First Selling ID has been generated successfully..!", "content": new_selling_id}
                return JSONResponse(status_code=200, content=response, media_type="application/json")

        except Exception as e:
            response = {"code": "02", "message": str(e), "content": None}
            return JSONResponse(status_code=500, content=response, media_type="application/json")

    # Save House Listing
    async def save_house_listing(self, house_listing_details: SellingHouse):
        try:
            selling_id = house_listing_details.selling_id
            
            house_data = house_listing_details.dict()
            
            house_listing = await self.collection.find_one({"selling_id": selling_id})
            if not house_listing:
                result = await self.collection.insert_one(house_data)
                if result:
                    response = {"code": "00", "message": "House listing saved successfully..!", "content": None}
                    return JSONResponse(status_code=200, content=response, media_type="application/json")
                else:
                    response = {"code": "01", "message": "Failed to save house listing", "content": None}
                    return JSONResponse(status_code=500, content=response, media_type="application/json")
            else:
                response = {"code": "01", "message": f"This {selling_id} - This House is Already in Selling status, Therefore can't be Added", "content": None}
                return JSONResponse(status_code=500, content=response, media_type="application/json")
            
        except Exception as e:
            response = {"code": "02", "message": str(e), "content": None}
            return JSONResponse(status_code=500, content=response, media_type="application/json")

    # Save House Images
    async def save_house_images(self, selling_id: str, seller_id: str, files: List[UploadFile] = File(...)):
        try:
            house_listing = await self.collection.find_one({"selling_id": selling_id, "seller_id": seller_id})
            if not house_listing:
                print("111111111111111111111111---------------------------------------------------------")
                response = {"code": "01", "message": "This House Listing doesn't exist.!", "content": None}
                return JSONResponse(status_code=500, content=response, media_type="application/json")
            else:
                print("2222222222222222222222---------------------------------------------------------")
                
                house_data = house_listing
                house_data['houseImages'] = []
                
                # Update the house listing with new houseImages
                # house_images = house_listing.get('houseImages', [])

                print("333333333333333---------------------------------------------------------")
                # Save multiple house images
                for file in files:
                    content = await file.read()
                    filename = file.filename
                    # Save file to your storage (e.g., file system, cloud storage) and get the URL
                    # For demonstration purposes, let's assume we're saving the file to a local directory named 'uploads'
                    file_path = f"F:/IJSE 4th Sem AI_ML/ML My Final Project/House-price-prediction_house-selling-ml-application/frontend/src/assets/uploads/houseImages/{filename}"
                    with open(file_path, "wb") as f:
                        f.write(content)
                    house_data['houseImages'].append(file_path)

                 # Update houseImages field in the existing document
                result = await self.collection.update_one({"selling_id": selling_id, "seller_id": seller_id}, {"$set": {"houseImages": house_data['houseImages']}})
                if result.modified_count > 0:
                    response = {"code": "00", "message": "House Listing has been Successfully Saved.!", "content": None}
                    return JSONResponse(status_code=200, content=response, media_type="application/json")
                else:
                    response = {"code": "01", "message": "Failed to save house images.!", "content": None}
                    return JSONResponse(status_code=500, content=response, media_type="application/json")
        except Exception as e:
            response = {"code": "02", "message": str(e), "content": None}
            return JSONResponse(status_code=500, content=response, media_type="application/json")