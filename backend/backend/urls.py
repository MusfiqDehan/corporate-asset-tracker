from django.contrib import admin
from django.urls import path, re_path
from api import views

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/employee/$', views.employee_list),
    re_path(r'^api/employee/([0-9])$', views.employee_detail),
]
