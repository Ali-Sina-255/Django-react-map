from django.db import models

class Listing(models.Model):
	name = models.CharField(max_lenght=200)