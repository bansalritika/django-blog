from django.db import models

class space(models.Model):
    space_name=models.CharField(max_length=100)
    space_desc=models.TextField(null=True, blank=True)
    space_img=models.ImageField(upload_to="space")
