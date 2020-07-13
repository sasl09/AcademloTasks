from django.shortcuts import render
from .models import Post
# from django.http import HttpResponse

# Create your views here.

# This is just some dummy data for testing...
posts = [
    {
        'author': 'Yo',
        'title': 'DjangoApp',
        'content': 'First App in Django',
        'date_posted': 'August 28, 2020'

    },
    {
        'author': 'Otro',
        'title': 'DjangoApp2',
        'content': 'Second App in Django',
        'date_posted': 'December 28, 2020'
    }
]

def home(request):
    context = {
        # "posts": posts
        'posts': Post.objects.all()
    }
    return render(request, 'blog/home.html', context)

def about(request):
    return render(request, 'blog/about.html', {'title': 'About No title'})