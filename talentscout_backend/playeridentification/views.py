from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import FormDataSerializer


@api_view(['POST'])
def rankPlayers(request):
    if request.method == 'POST':
        serializer = FormDataSerializer(data=request.data)
        if serializer.is_valid():
            # Extracting data from the validated serializer
            data = serializer.validated_data

            # Check the values of 'format' and 'playing_role' fields
            format = data['format']
            playing_role = data['playing_role']
            batting_style = data['batting_style']
            bowling_style = data['bowling_style']
            age_min_value = data['age_min_value']
            age_max_value = data['age_max_value']

            print(format, playing_role, batting_style, bowling_style, age_min_value, age_max_value)

            # Return a valid Response
            return Response(data, status=status.HTTP_200_OK)
        else:
            # Return a response with errors if the serializer is not valid
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            # Check specific format and playing_role combinations
            # if format == 'test':
            #     if playing_role == 'batsman':
            #         # Apply model logic for Test format and Batsman playing_role
            #         return Response({"message": format + " " + playing_role}, status=200)
            #     elif playing_role == 'bowler':
            #         # Apply model logic for Test format and Bowler playing_role
            #         return Response({"message": format + " " + playing_role}, status=200)
            #     elif playing_role == 'wicketkeeper':
            #         # Apply model logic for Test format and Wicketkeeper playing_role
            #         return Response({"message": format + " " + playing_role}, status=200)
            #     elif playing_role == 'all_rounder':
            #         # Apply model logic for Test format and All Rounder playing_role
            #         return Response({"message": format + " " + playing_role}, status=200)
            # elif format == 'odi':
            #     if playing_role == 'batsman':
            #         # Apply model logic for ODI format and Batsman playing_role
            #         return Response({"message": format + " " + playing_role}, status=200)
            #     elif playing_role == 'bowler':
            #         # Apply model logic for ODI format and Bowler playing_role
            #         return Response({"message": format + " " + playing_role}, status=200)
            #     elif playing_role == 'wicketkeeper':
            #         # Apply model logic for ODI format and Wicketkeeper playing_role
            #         return Response({"message": format + " " + playing_role}, status=200)
            #     elif playing_role == 'all_rounder':
            #         # Apply model logic for ODI format and All Rounder playing_role
            #         return Response({"message": format + " " + playing_role}, status=200)
            # elif format == 't20':
            #     if playing_role == 'batsman':
            #         # Apply model logic for T20 format and Batsman playing_role
            #         return Response({"message": format + " " + playing_role}, status=200)
            #     elif playing_role == 'bowler':
            #         # Apply model logic for T20 format and Bowler playing_role
            #         return Response({"message": format + " " + playing_role}, status=200)
            #     elif playing_role == 'wicketkeeper':
            #         # Apply model logic for T20 format and Wicketkeeper playing_role
            #         return Response({"message": format + " " + playing_role}, status=200)
            #     elif playing_role == 'all_rounder':
            #         # Apply model logic for T20 format and All Rounder playing_role
            #         return Response({"message": format + " " + playing_role}, status=200)
        # else:
        #     # Return validation errors if data is not valid
        #     return Response(serializer.errors, status=400)
