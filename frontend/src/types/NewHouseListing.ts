export type NewHouseListing = {
    sellingID: string;
    name: string;
    description: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    mainImageUrl?: string;
    images?: { url: string }[];
    location: { lat: number, lng: number };
    ownerName: string;
    ownerContact1: string;
    ownerContact2: string;
    saleDate: string;
    saleTime: string;
};