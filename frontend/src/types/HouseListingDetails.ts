export type HouseListingDetails = {
    name: string;
    description?: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: string;
    mainImageUrl: string;
    images?: { url: string }[]
};