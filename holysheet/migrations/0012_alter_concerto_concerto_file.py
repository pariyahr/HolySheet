# Generated by Django 4.2.9 on 2024-01-31 11:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("holysheet", "0011_remove_customer_is_logged_in_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="concerto",
            name="concerto_file",
            field=models.FileField(upload_to="", verbose_name="Concerto File Path"),
        ),
    ]
