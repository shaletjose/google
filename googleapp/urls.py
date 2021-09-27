from django.urls import path
from googleapp import views
app_name='googleapp'
urlpatterns = [
    path('', views.index, name='index'),
    # path('content', views.content, name='content'),

]