from django.db import models

from django.utils.translation import gettext_lazy as _


# Create your models here.


class Genre(models.TextChoices):
    POP = ('POP', _('pop'))
    JAZZ = ('JAZZ', _('jazz'))
    INSTRUMENTAL = ('INSTRUMENTAL', _('instrumental'))
    ROCK = ('ROCK', _('rock'))
    ELECTRONIC = ('ELECTRONIC', _('electronic'))
    METAL = ('METAL', _('metal'))
    RAP = ('RAP', _('rap'))
    CLASSICAL = ('CLASSICAL', _('classical'))



class Customer(models.Model):
    first_name = models.CharField(_('Customer First name'), max_length=100, default='0000000')
    last_name = models.CharField(_('Customer Last name'), max_length=100, default='0000000')
    username = models.CharField(_('Customer Username'), max_length=100, unique=True, default='0000000')
    password = models.CharField(_('Customer Password'), max_length=100, default='0000000')
    contact_number = models.CharField(_('Customer Contact number'), unique=True, max_length=12)
    gender = models.CharField(_('Customer Gender'), max_length=100, default='0000000')
    assets = models.IntegerField(_('Customer Assets To Purchase'), default='0000000')
    email = models.EmailField(_('Customer Email'), unique=True, max_length=100)
    profile_picture = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100, default='../../vue-holysheet/assets/profile-icon.jpg')
    followings_num = models.IntegerField(_('followings'), max_length=100, default=0)
    saved_concertos = models.ManyToManyField('Concerto', related_name='saved_by_costumer', blank=True)

    def __str__(self):
        return f' {self.first_name} {self.last_name}'


class Seller(models.Model):
    first_name = models.CharField(_('Seller First name'), max_length=100, default='0000000')
    last_name = models.CharField(_('Seller Last name'), max_length=100, default='0000000')
    username = models.CharField(_('Seller Username'), max_length=100, unique=True, default='0000000')
    password = models.CharField(_('Seller Password'), max_length=100, default='0000000')
    gender = models.CharField(_('Seller Gender'), max_length=100, default='0000000')
    contact_number = models.CharField(_('Seller Contact number'), unique=True, max_length=12)
    email = models.EmailField(_('Seller Email'), unique=True, max_length=100)
    profile_picture = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100, default='profile-icon.jpg')
    followers_num = models.IntegerField(_('followers'), max_length=100, default=0)
    followings_num = models.IntegerField(_('followings'), max_length=100, default=0)
    posts_num = models.IntegerField(_('posts'), max_length=100, default=0)
    saved_concertos = models.ManyToManyField('Concerto', related_name='saved_by', blank=True)
    posted_concertos = models.ManyToManyField('Concerto', related_name='posted_by', blank=True)
    assets = models.IntegerField(_('Customer Assets To Purchase'), default='0000000')
    seller_followers = models.ManyToManyField('Seller')
    Customer_followers = models.ManyToManyField(Customer)


    def __str__(self):
        return f'Seller Full Name: {self.first_name} {self.last_name}'


class Preview(models.Model):
    file = models.FileField(_('Concerto Preview File'), unique=True)
    tempo = models.IntegerField(_('preview tempo'))
    quality = models.CharField(_('Preview Quality'), max_length=1000)


class Concerto(models.Model):
    name = models.CharField(_('Concerto Name'), max_length=100)
    composer = models.CharField(_('Concerto Composer'), max_length=100)
    price = models.IntegerField(_('Concerto Price'))
    concerto_file = models.FileField(_('Concerto File Path'), unique=False)
    concerto_file_pdf = models.FileField(_('Concerto File Path Pdf'), unique=False)
    score = models.IntegerField(_('Concerto Score'), max_length=2)
    genre = models.CharField(_('concerto genre'), choices=Genre.choices, max_length=1000)
    description = models.CharField(_('Concerto Description'), max_length=1000, default="", blank=True)
    quality = models.CharField(_('Concerto Quality'), max_length=1000, default="", blank=True)
    owner = models.ForeignKey(Seller, on_delete=models.CASCADE, unique=False)

    def __str__(self):
        return (f'Concerto Name: {self.name}, Concerto Score: {self.score} '
                f'Concerto Price: {self.price} ,Concerto Genre: {self.genre}, Concerto Owner: {self.owner}'
                f'Concerto Description: {self.description}, Concerto Quality: {self.quality}')
