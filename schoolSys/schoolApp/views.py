from django.shortcuts import render
from .models import Subjects
# Create your views here.


def subjects(request):
    context = {
        'subjects': Subjects.objects.all()
    }
    return render(request, 'schoolApp/subjects.html', context)

def students(request):
    return render(request, 'schoolApp/students.html', {'title': 'About No title'})