from backend.routes import seller_routes




# ===============================================================================================================================================================




class Seller:
    # This is the Constructor of this Seller Class
    def __init__(self, seller_id="", seller_name="", seller_contact_01="", seller_contact_02="", seller_address="", seller_email=""):
        self.seller_id = str(seller_id)
        self.seller_name = str(seller_name)
        self.seller_contact_01 = str(seller_contact_01)
        self.seller_contact_02 = str(seller_contact_02)
        self.seller_address = str(seller_address)
        self.seller_email = str(seller_email)
        # Optionally, you can add created_at and updated_at attributes here.

# Create a new instance of Seller
seller_instance_01 = Seller()

# Set values for the attributes of the new instance
seller_instance_01.seller_id = "12345"
seller_instance_01.seller_name = "Example Seller"
seller_instance_01.seller_contact_01 = "123-456-7890"
seller_instance_01.seller_address = "123 Main St, City, Country"
seller_instance_01.seller_email = "seller@example.com"

# Get values from the instance
print("Seller ID:", seller_instance_01.seller_id)
print("Seller Name:", seller_instance_01.seller_name)
print("Seller Contact 01:", seller_instance_01.seller_contact_01)
print("Seller Address:", seller_instance_01.seller_address)
print("Seller Email:", seller_instance_01.seller_email)

# =============================================================================================================================>
print("======================================================================================================")

seller_instance_02 = Seller("0445454554", "Kasun Perera", "S001", "0434343434", "Galle",  "kperera@gmail.com")

# Get values from the instance
print("Seller ID:", seller_instance_02.seller_id)
print("Seller Name:", seller_instance_02.seller_name)
print("Seller Contact 01:", seller_instance_02.seller_contact_01)
print("Seller Address:", seller_instance_02.seller_address)
print("Seller Email:", seller_instance_02.seller_email)