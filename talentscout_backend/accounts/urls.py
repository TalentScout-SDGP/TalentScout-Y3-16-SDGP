from django.urls import path
from .views import GetAllUsers, ApproveAdminView, DeleteUserByEmailView, RegisterUserView, VerifyUserEmail, LoginUserView, PasswordResetConfirmView, \
    PasswordResetRequestView, SetNewPassword, LogoutUserView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('all-users/', GetAllUsers.as_view(), name='all-users'),
    path('approve-admin/<str:email>/', ApproveAdminView.as_view(), name='approve-admin'),
    path('delete-user/<str:email>/', DeleteUserByEmailView.as_view(), name='delete-user'),
    path('register/', RegisterUserView.as_view(), name='register'),
    path('verify-email/', VerifyUserEmail.as_view(), name='verify-email'),
    path('login/', LoginUserView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='refresh_token'),
    path('password-reset/', PasswordResetRequestView.as_view(), name='password-reset'),
    path('password-reset-confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='password-reset-confirm'),
    path('set-new-password/', SetNewPassword.as_view(), name='set-new-password'),
    path('logout/', LogoutUserView.as_view(), name='logout'),
]
