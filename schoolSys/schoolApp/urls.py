from django.urls import path
from . import views
#The dot means: "From the same file"...

# Once we choose to come to this file, it will directly go to the default path in the views file (usually
# "home") which is an empty string (""), and then we could choose to enter another path.

urlpatterns = [
    path("", views.subjects, name="subjects"),
    path("students", views.students, name="students")
]
