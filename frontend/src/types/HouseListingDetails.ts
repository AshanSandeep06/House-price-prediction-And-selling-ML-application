export type HouseListingDetails = {
    selling_id: string;
    seller_id: string;
    name: string;
    description: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    location: {lat: number, lng: number}
    houseImages: string[]
    ownerName: string;
    ownerContact1: string;
    ownerContact2: string;
    saleDate: string;
    saleTime: string;
};