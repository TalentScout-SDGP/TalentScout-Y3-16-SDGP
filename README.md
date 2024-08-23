<img src="https://i.ibb.co/DfKRfmw/TS-Logo.png" alt="TalentScout Logo" width="300" height="300">

# TalentScout - Cricket Talent Identification Platform

**IMPORTANT TO NOTE:** This project was developed as part of the [Informatics Institute Of Technology, Sri Lanka - Software Development Group Project module.
The platform is a prototype and is not intended for commercial use.

The platform is tailored for analyzing domestic Sri Lankan cricket players, drawing from a rich database of player statistics. Our machine learning model and statistical analysis
tools are designed to adapt to new and varied types of cricket data, demonstrating the capability to generate reliable insights regardless of the dataset provided. This flexibility
ensures that as long as the necessary cricket stats are available, TalentScout can effectively process and deliver meaningful outputs, supporting decision-making in player
selection.

## # Project Links

- Visit the [TalentScout Landing Page](https://talent-scout-landing-page.vercel.app/) for more information.
- Watch our [Platform Overview Video](https://youtu.be/xtT21LQDB3s) on YouTube for a detailed walkthrough.

## # Features

### 1. Homepage

- Provides a user-friendly interface and navigation to all the application features.
- Accessible to all visitors without any restrictions.

### 2. Explore Players Page (Player Identification)

- **Restricted Access:** Only available to logged-in users.
- **Functionality:** Allows users to filter players based on criteria such as playing format and role.
- **Analytics:** Utilizes machine learning to perform statistical analysis and generate a ranked list of top 10 potential players.

### 3. Player Comparison Page

- **Access:** Available to both logged-in users and visitors.
- **Comparison Tool:** Enables side-by-side statistical comparison of two players.

### 4. Player Profile Page

- **Access:** Open to both logged-in users and visitors.
- **Details Displayed:** Shows comprehensive player profiles including full name, date of birth, playing role, batting and bowling styles, and a list of relevant statistics.

### 5. Player Management (CRUD)

- **Admin Access:** Exclusively available to admins who are logged in.
- **CRUD Operations:** Admins can create, read, update, and delete player data.
- **Integration:** Allows for updating the Machine Learning model with new player data or modifications.

## # Technologies

- **Frontend:** React, TailwindCSS
- **Backend:** Django, Django Rest Framework
- **Database:** SQLite (Development), PostgreSQL (Production)

## # Security Features

### HTTP-Only Cookies

Our platform enhances security by leveraging HTTP-only cookies. This configuration helps mitigate the risk of client-side script access to the protected cookie data.

## # Setup

To get this project up and running on your local machine for development and testing purposes, follow these steps:

**Note on Configuration Changes**:-
You may need to adjust certain configurations, such as database settings and API URLs, to suit your local development environment. Ensure that these settings are correctly
configured before starting the services. Specific details may vary depending on your development setup and the specifics of your local system

```bash
# TO BE UPDATED!!!!

# Clone the repository
git clone https://github.com/your-username/your-repository.git

# Navigate to the project directory
cd your-repository

# Install dependencies for the backend
pip install -r requirements.txt

# Navigate to the frontend directory
cd frontend

# Install dependencies for the frontend
npm install

# Serve the React application
npm start
```

## # Contributors

The TalentScout platform was brought to life by a dedicated team of developers:

- **Dulhan Perera** - Team Leader
- **Dinuka Heshan** - Team Member
- **Linuka Rivi Rihan** - Team Member
- **Sulan Kumarapperuma** - Team Member
- **Chamath Mahapatuna** - Team Member
- **Agrani Ranathunga** - Team Member

