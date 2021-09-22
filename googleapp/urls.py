from django.urls import path
from googleapp import views
urlpatterns = [
    path('', views.index, name='index'),
]