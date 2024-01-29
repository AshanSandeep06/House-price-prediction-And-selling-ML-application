type MapDetails = {
    mapWidth: number;
    mapHeight: number;
    onClick?: React.MouseEventHandler<HTMLElement>;
    location?: {lat: number, lng: number}
};

export default MapDetails;