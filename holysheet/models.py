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


class Customer(models.Model):
    first_name = models.CharField(_('Customer First name'), max_length=100, default='0000000')
    last_name = models.CharField(_('Customer Last name'), max_length=100, default='0000000')
    username = models.CharField(_('Customer Username'), max_length=100, unique=True, default='0000000')
    password = models.CharField(_('Customer Password'), max_length=100, default='0000000')
    contact_number = models.CharField(_('Customer Contact number'), unique=True, max_length=12)
    gender = models.CharField(_('Customer Gender'), max_length=100, default='0000000')
    assets = models.IntegerField(_('Customer Assets To Purchase'), default='0000000')
    email = models.EmailField(_('Customer Email'), unique=True, max_length=100)

    def __str__(self):
        return (f'Customer Full Name: {self.first_name} {self.last_name}, '
                f'Customer Contact number: {self.contact_number} ,Customer Gender: {self.gender},'
                f' Customer Assets To Purchase: {self.assets}, Customer Email: {self.email}')


class Seller(models.Model):
    first_name = models.CharField(_('Seller First name'), max_length=100, default='0000000')
    last_name = models.CharField(_('Seller Last name'), max_length=100, default='0000000')
    username = models.CharField(_('Seller Username'), max_length=100, unique=True, default='0000000')
    password = models.CharField(_('Seller Password'), max_length=100, default='0000000')
    gender = models.CharField(_('Seller Gender'), max_length=100, default='0000000')
    contact_number = models.CharField(_('Seller Contact number'), unique=True, max_length=12)
    email = models.EmailField(_('Seller Email'), unique=True, max_length=100)

    def __str__(self):
        return (f'Seller Full Name: {self.first_name} {self.last_name}, '
                f'Seller Contact number: {self.contact_number} ,Seller Gender: {self.gender},'
                f'Seller Email: {self.email}')


class Preview(models.Model):
    file = models.FileField(_('Concerto Preview File'), unique=True)
    tempo = models.IntegerField(_('preview tempo'))
    quality = models.CharField(_('Preview Quality'), max_length=1000)


class Concerto(models.Model):
    name = models.CharField(_('Concerto Name'), max_length=100)
    concerto_ID = models.CharField(_('concerto ID'), max_length=10, unique=True)
    price = models.IntegerField(_('Concerto Price'))
    concerto_file = models.FileField(_('Concerto File Path'), unique=True)
    preview = models.OneToOneField(Preview, unique=True, on_delete=models.CASCADE)
    score = models.IntegerField(_('Concerto Score'), max_length=2)
    genre = models.CharField(_('concerto genre'), choices=Genre.choices, max_length=1000)
    description = models.CharField(_('Concerto Description'), max_length=1000)
    quality = models.CharField(_('Concerto Quality'), max_length=1000)
    owner = models.ForeignKey(Seller, unique=True, on_delete=models.CASCADE)

    def __str__(self):
        return (f'Concerto Name: {self.name}, Concerto ID: {self.concerto_ID}, Concerto Score: {self.score} '
                f'Concerto Price: {self.price} ,Concerto Genre: {self.genre}, Concerto Owner: {self.owner}'
                f'Concerto Description: {self.description}, Concerto Quality: {self.quality}')
