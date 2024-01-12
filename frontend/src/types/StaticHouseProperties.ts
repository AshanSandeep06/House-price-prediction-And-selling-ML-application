export type StaticHouseProperty = {
    _id: string;
    title: string;
    description: string;
    price: string;
    imagePath: string;
  };

export type StaticHousePropertyList = {
    houseProperties: StaticHouseProperty[] | null;
};