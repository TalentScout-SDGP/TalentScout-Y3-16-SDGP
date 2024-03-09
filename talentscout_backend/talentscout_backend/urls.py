from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')),
    path('api/auth/', include('accounts_social.urls')),
    path('api/crud/', include('crud_api.urls')),
    path('api/rank/', include('playeridentification.urls')),
]
