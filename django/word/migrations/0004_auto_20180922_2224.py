# Generated by Django 2.1.1 on 2018-09-22 19:24

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('word', '0003_dictionaries'),
    ]

    operations = [
        migrations.AddField(
            model_name='dictionaries',
            name='language',
            field=models.ManyToManyField(to='word.Languages'),
        ),
        migrations.AddField(
            model_name='dictionaries',
            name='words',
            field=models.ManyToManyField(to='word.Words'),
        ),
        migrations.AlterField(
            model_name='dictionaries',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2018, 9, 22, 22, 24, 26, 184964)),
        ),
    ]
