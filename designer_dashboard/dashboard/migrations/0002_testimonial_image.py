# Generated by Django 5.1.3 on 2024-11-08 01:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='testimonial',
            name='image',
            field=models.ImageField(null=True, upload_to=None),
        ),
    ]