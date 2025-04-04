from rest_framework import serializers
from .utils import Google, register_social_user
from django.conf import settings
from rest_framework.exceptions import AuthenticationFailed
from .githubauth import Github


class GoogleSignInSerializer(serializers.Serializer):
    access_token = serializers.CharField(min_length=6)

    def validate_access_token(self, access_token):
        google_user_data = Google.validate(access_token)
        try:
            user_id = google_user_data['sub']
        except Exception as e:
            raise serializers.ValidationError("This token is invalid or has expired")

        if google_user_data['aud'] != settings.GOOGLE_CLIENT_ID:
            raise AuthenticationFailed(detail='Could not verify user')
        email = google_user_data['email']
        first_name = google_user_data['given_name']
        last_name = google_user_data['family_name']
        provider = 'google'

        return register_social_user(provider, email, first_name, last_name)


class GithubSignInSerializer(serializers.Serializer):
    code = serializers.CharField()

    def validate_code(self, code):
        access_token = Github.exchange_code_for_token(code)

        if access_token:
            user_data = Github.get_github_user(access_token)

            full_name = user_data['name']
            email = user_data['email']
            names = full_name.split(" ")
            first_name = names[1]
            last_name = names[0]
            provider = 'github'
            return register_social_user(provider, email, first_name, last_name)
