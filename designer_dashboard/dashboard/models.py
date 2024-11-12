from django.db import models

class Portfolio(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='portfolio_images/')
    created_at = models.DateTimeField(auto_now_add=True)

class Service(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

class Testimonial(models.Model):
    # client_name = models.CharField(max_length=255,null=True)
    # feedback = models.TextField(null=True)
    # project = models.ForeignKey(Portfolio, on_delete=models.CASCADE,null=True)
    image = models.ImageField(upload_to='clients/', null=True, blank=True)

class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
