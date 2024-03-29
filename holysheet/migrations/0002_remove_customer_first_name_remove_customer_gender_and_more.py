# Generated by Django 4.2.6 on 2023-11-29 13:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('holysheet', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='gender',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='last_name',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='national_ID',
        ),
        migrations.RemoveField(
            model_name='seller',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='seller',
            name='gender',
        ),
        migrations.RemoveField(
            model_name='seller',
            name='last_name',
        ),
        migrations.RemoveField(
            model_name='seller',
            name='manager',
        ),
        migrations.RemoveField(
            model_name='seller',
            name='national_ID',
        ),
        migrations.AddField(
            model_name='customer',
            name='password',
            field=models.CharField(default='0000000', max_length=100, verbose_name='Customer Password'),
        ),
        migrations.AddField(
            model_name='customer',
            name='username',
            field=models.CharField(default='0000000', max_length=100, unique=True, verbose_name='Customer Username'),
        ),
        migrations.AddField(
            model_name='seller',
            name='password',
            field=models.CharField(default='0000000', max_length=100, verbose_name='Seller Password'),
        ),
        migrations.AddField(
            model_name='seller',
            name='username',
            field=models.CharField(default='0000000', max_length=100, unique=True, verbose_name='Seller Username'),
        ),
        migrations.DeleteModel(
            name='Manager',
        ),
    ]
