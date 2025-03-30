# Generated by Django 5.1.7 on 2025-03-30 21:03

import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Informacion',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('full_name', models.CharField(max_length=50, verbose_name='Nombre completo')),
                ('specialty', models.CharField(max_length=60, verbose_name='Especialidad')),
                ('bio', models.TextField(max_length=500, verbose_name='Biografía')),
                ('email', models.EmailField(max_length=254, verbose_name='Correo electrónico')),
                ('phone', models.CharField(max_length=15, verbose_name='Teléfono')),
                ('url_web', models.URLField(blank=True, verbose_name='Sitio web')),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='avatars/')),
                ('embedding', models.JSONField(blank=True, editable=False, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Información personal',
                'verbose_name_plural': 'Informaciones personales',
                'db_table': 'Informacion',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='SocialMedia',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('platform', models.CharField(choices=[('github', 'GitHub'), ('linkedin', 'LinkedIn'), ('twitter', 'Twitter'), ('youtube', 'YouTube'), ('other', 'Otro')], default='other', max_length=20)),
                ('url', models.URLField()),
                ('username', models.CharField(blank=True, max_length=50)),
                ('is_active', models.BooleanField(default=True)),
                ('order', models.PositiveIntegerField(default=0)),
                ('embedding', models.JSONField(blank=True, editable=False, null=True)),
                ('informacion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='redes_sociales', to='Informacion.informacion')),
            ],
            options={
                'verbose_name': 'Red social',
                'verbose_name_plural': 'Redes sociales',
                'ordering': ['order'],
            },
        ),
    ]
