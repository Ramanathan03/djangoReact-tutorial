from django.db import models

# Create your models here.
class Article(models.Model):
	title = models.CharField(max_length=120)
	content = models.TextField()

	def __str__(self):
		return "{0},{1}".format(self.title,self.content)