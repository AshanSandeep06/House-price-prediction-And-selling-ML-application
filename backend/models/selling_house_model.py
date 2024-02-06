from pydantic import BaseModel

class SellingHouse(BaseModel):
    sellingID: str
    name: str
    description: str
    address: str
    price: float
    bedrooms: int
    bathrooms: int
    area: float
    location: dict
    ownerName: str
    ownerContact1: str
    ownerContact2: str
    saleDate: str
    saleTime: str