export type NewHouseListing = {
    selling_id: string;
    seller_id: string;
    name: string;
    description: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    houseImages: []
    mainImageUrl?: string;
    images?: { url: string }[];
    location: { lat: number, lng: number };
    ownerName: string;
    ownerContact1: string;
    ownerContact2: string;
    saleDate: string;
    saleTime: string;
};