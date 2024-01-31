# Generated by Django 4.2.9 on 2024-01-31 16:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("holysheet", "0016_seller_posted_concertos"),
    ]

    operations = [
        migrations.AddField(
            model_name="customer",
            name="saved_concertos",
            field=models.ManyToManyField(
                blank=True, related_name="saved_by_costumer", to="holysheet.concerto"
            ),
        ),
    ]
