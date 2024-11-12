from rest_framework import serializers
from .models import Portfolio, Service, Testimonial, Contact

class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portfolio
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ['id', 'image']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        request = self.context.get('request')  # Get the request object from context
        if request and instance.image:
            # Build the absolute URL for the image
            representation['image'] = request.build_absolute_uri(instance.image.url)
        return representation


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
