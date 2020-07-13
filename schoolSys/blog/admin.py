from django.contrib import admin
from .models import Post
# Register your models here.

admin.site.register(Post) #This will save and load our "Post" section on our Django admin page...
