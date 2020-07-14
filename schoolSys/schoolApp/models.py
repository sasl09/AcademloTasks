from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.

class Subjects(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    starting_date = models.DateTimeField(default=timezone.now)
    student = models.ForeignKey(User, on_delete=models.CASCADE)

#This next line will tell us more info about our posts when
    # we call them on the shell (In this case we'll show the title)
    def __str__(self):
        return self.title
