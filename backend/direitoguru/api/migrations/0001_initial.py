# Generated by Django 3.2.9 on 2021-12-08 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Feed',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('area', models.CharField(max_length=200)),
                ('duvida', models.TextField()),
                ('data', models.CharField(max_length=200)),
            ],
        ),
    ]
