from rest_framework import viewsets
from .models import Portfolio, Service, Testimonial, Contact
from .serializers import PortfolioSerializer, ServiceSerializer, TestimonialSerializer, ContactSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from pathlib import Path
from django.conf import settings

class PortfolioViewSet(viewsets.ModelViewSet):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

class ContactViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

@api_view(['GET'])
def get_testimonials(request):
    testimonials = Testimonial.objects.all()
    serializer = TestimonialSerializer(testimonials, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def get_images(request):
    # Adjust this to fetch image paths dynamically from your 'araj' folder
    images = []
    media_folder = Path(settings.MEDIA_ROOT) / 'araj'
    print("media_f..older", media_folder)
    for img in media_folder.glob('*.*'):  # This will get all files in the 'araj' folder
        images.append(str(img.relative_to(settings.MEDIA_ROOT)))

    print("imag..es", images)
    return Response(images)
