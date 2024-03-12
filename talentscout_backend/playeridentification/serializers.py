from rest_framework import serializers


class FormDataSerializer(serializers.Serializer):
    format = serializers.CharField()
    playing_role = serializers.CharField()
    batting_style = serializers.CharField(required=False)
    bowling_style = serializers.CharField(required=False)
    age_min_value = serializers.IntegerField()
    age_max_value = serializers.IntegerField()
