from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PortfolioViewSet, ServiceViewSet, TestimonialViewSet, ContactViewSet, get_testimonials, get_images
from . import views

router = DefaultRouter()
router.register(r'portfolio', PortfolioViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'testimonials', TestimonialViewSet)
router.register(r'contacts', ContactViewSet)

urlpatterns = [
    path('', include(router.urls)),  # Includes viewsets
    path('get_testimonials/', get_testimonials, name='get_testimonials'),  # Separate path for the function-based view
    path('get_images/', get_images, name='get_images'),  # Separate path for the function-based view
]