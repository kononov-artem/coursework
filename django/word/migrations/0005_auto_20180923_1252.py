# Generated by Django 2.1.1 on 2018-09-23 09:52

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('word', '0004_auto_20180922_2224'),
    ]

    operations = [
        migrations.AddField(
            model_name='words',
            name='language',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='word.Languages'),
        ),
        migrations.AlterField(
            model_name='dictionaries',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2018, 9, 23, 12, 52, 31, 286946)),
        ),
    ]
