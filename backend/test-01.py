import requests

def get_address_from_coords(lat, lon):
    url = f"https://nominatim.openstreetmap.org/reverse?format=json&lat={lat}&lon={lon}&zoom=18&addressdetails=1&accept-language=en"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        address = data.get('display_name', 'Address not found')
        return address
    else:
        return "Failed to retrieve address"

# Example usage:
latitude = 6.033092502001798
longitude = 80.21553218364717
address = get_address_from_coords(latitude, longitude)
print("Address:", address)
