# Generated by Django 4.2.9 on 2024-01-31 11:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        (
            "holysheet",
            "0008_remove_concerto_preview_alter_concerto_description_and_more",
        ),
    ]

    operations = [
        migrations.AlterField(
            model_name="concerto",
            name="owner",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="holysheet.seller"
            ),
        ),
    ]