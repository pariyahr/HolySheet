# Generated by Django 4.2.6 on 2024-01-25 20:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('holysheet', '0005_customer_followers_num_customer_followings_num_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='followers_num',
        ),
        migrations.AddField(
            model_name='seller',
            name='posts_num',
            field=models.IntegerField(default=0, max_length=100, verbose_name='posts'),
        ),
    ]
