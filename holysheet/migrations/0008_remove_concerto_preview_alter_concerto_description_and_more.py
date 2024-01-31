# Generated by Django 4.2.9 on 2024-01-31 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("holysheet", "0007_alter_customer_profile_picture_and_more"),
    ]

    operations = [
        migrations.RemoveField(model_name="concerto", name="preview",),
        migrations.AlterField(
            model_name="concerto",
            name="description",
            field=models.CharField(
                blank=True,
                default="",
                max_length=1000,
                verbose_name="Concerto Description",
            ),
        ),
        migrations.AlterField(
            model_name="concerto",
            name="genre",
            field=models.CharField(
                choices=[
                    ("POP", "pop"),
                    ("JAZZ", "jazz"),
                    ("INSTRUMENTAL", "instrumental"),
                    ("ROCK", "rock"),
                    ("ELECTRONIC", "electronic"),
                    ("METAL", "metal"),
                    ("RAP", "rap"),
                    ("CLASSICAL", "classical"),
                ],
                max_length=1000,
                verbose_name="concerto genre",
            ),
        ),
        migrations.AlterField(
            model_name="concerto",
            name="quality",
            field=models.CharField(
                blank=True, default="", max_length=1000, verbose_name="Concerto Quality"
            ),
        ),
    ]