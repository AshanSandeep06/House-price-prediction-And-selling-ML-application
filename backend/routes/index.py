from fastapi import APIRouter
from routes.seller_routes import seller_routes

main_router = APIRouter()
url_prefix = "/api/v1"

# Creating a new endpoint for the main router to handle requests with /sellers/
sellerRoutes = seller_routes()

# Register routes with FastAPI
# Creating router middlwares to connect all routers into one location
main_router.include_router(sellerRoutes.get_router(), prefix=f"{url_prefix}/seller")
