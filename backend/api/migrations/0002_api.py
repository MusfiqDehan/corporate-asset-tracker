# Generated by Django 4.2.5 on 2023-09-10 07:04

from django.db import migrations


def create_data(apps, schema_editor):
    Employee = apps.get_model('api', 'Employee')
    Employee(name="Joe Silver", email="joe@email.com",
             document="22342342", phone="00000000").save()


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]
