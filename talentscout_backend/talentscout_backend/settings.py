import os
import environ
from pathlib import Path
from datetime import timedelta

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = 'django-insecure-7az+h-g&j%*bdl-20f4d@ptxc)cljqcom4v7rva5+-ubt5kso+'

DEBUG = True

ALLOWED_HOSTS = ['*']

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Our apps
    'accounts',
    'accounts_social',
    'crud_api',
    'playeridentification',

    'rest_framework',
    'rest_framework_simplejwt.token_blacklist',
    'corsheaders',
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
]

ROOT_URLCONF = 'talentscout_backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

LOGOUT_REDIRECT_URL = '/admin/logout/'

WSGI_APPLICATION = 'talentscout_backend.wsgi.application'

# Database

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'talentscout_backend',
        'USER': 'talentscout_backend_user',
        'PASSWORD': 'N3mZ5mIImMPBD6F6jeky37ZyRrf5KNEC',
        'HOST': 'dpg-cnqk82v109ks73fc6fj0-a.oregon-postgres.render.com',
        'PORT': '5432',
    }
}

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=60),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
    "AUTH_HEADER_TYPES": ("Bearer",),
}

AUTH_USER_MODEL = "accounts.User"

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}

# Password validation

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)

STATIC_URL = 'static/'

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Default primary key field type

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    'https://talentscout.vercel.app',
    "https://development-talentscout-sdgp.vercel.app",
]

CSRF_TRUSTED_ORIGINS = [
    'http://localhost:5173',
    'https://talentscout.vercel.app',
    "https://development-talentscout-sdgp.vercel.app",
]

DEFAULT_FROM_EMAIL = 'talentscout.help@gmail.com'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'talentscout.help@gmail.com'
EMAIL_HOST_PASSWORD = 'ktdbbmbsfoqavyhs'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

GOOGLE_CLIENT_ID = "266127850805-ae29j50o0l2f6ubf8s9k162g63l9ltgm.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET = "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"
SOCIAL_AUTH_PASSWORD = "sdsdasdca1ds5dsdas"

GITHUB_CLIENT_ID = "a853fabaf2b90950c2f0"
GITHUB_SECRET_ID = "9e81c84915bdab861e7d9d4627c2a98cd50dc026"
