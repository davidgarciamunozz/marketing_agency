# Generated by Django 5.0.6 on 2024-06-20 17:34

import ckeditor.fields
import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('category', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('slug', models.SlugField(max_length=255, unique=True)),
                ('thumbnail', models.ImageField(upload_to='blog_thumbnail_directory')),
                ('excerpt', models.CharField(max_length=255)),
                ('description', ckeditor.fields.RichTextField()),
                ('time_read', models.IntegerField(default=0)),
                ('published', models.DateTimeField(default=django.utils.timezone.now)),
                ('views', models.IntegerField(blank=True, default=0)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='category.category')),
            ],
            options={
                'ordering': ('-published',),
            },
        ),
        migrations.CreateModel(
            name='ViewCount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ip_address', models.CharField(max_length=225)),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='blogpost_view_count', to='blog.post')),
            ],
        ),
    ]