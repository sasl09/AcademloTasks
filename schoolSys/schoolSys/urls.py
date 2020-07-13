"""schoolSys URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

# This is the first path patterns reached by our program when it's run, then it redirects to a default page
# that will give us the options to either go to our django admin, or to our "app urls" file, by entering
# the app's file name on the actual "url".

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('', include("blog.urls")),
# ]

# Or we could just leave the second path empty (which is the one that takes us to our app's urls) so that
# by default we get redirected to our home page...

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("blog.urls")),
]