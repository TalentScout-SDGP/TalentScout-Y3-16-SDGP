<img src="https://i.ibb.co/DfKRfmw/TS-Logo.png" alt="TalentScout Logo" width="300" height="300">

# TalentScout - Cricket Talent Identification Platform

> 🚨 **Note:** This project was developed as part of the *Software Development Group Project* module at the [Informatics Institute of Technology (IIT), Sri Lanka].  
> The platform is a prototype and is **not intended for commercial use**.

---
TalentScout is a web-based platform focused on analyzing and identifying domestic cricket talent in Sri Lanka. It leverages a machine learning-powered engine to provide statistical analysis and player insights. The system is flexible and adaptable to different cricket datasets, ensuring consistent, data-driven outputs for aiding player selection and scouting decisions.

---
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


## 🧑‍💻 Tech Stack

| Layer       | Technology              |
|-------------|--------------------------|
| Frontend    | React, Tailwind CSS      |
| Backend     | Django, Django REST Framework |
| Database    | SQLite (Development), PostgreSQL (Production) |
| ML & Analysis | Python, scikit-learn, Pandas |
| API Communication | REST API (Django REST Framework) |


## # Setup

To get this project up and running on your local machine for development and testing purposes, follow these steps:

### 📦 Clone the repository
```bash
# Clone the repository
git clone https://github.com/TalentScout-SDGP/TalentScout-Y3-16-SDGP

```
### 🔧 Start The Backend
```bash
cd talentscout_backend

# 1) Create a Virtual Environment
- For Windows:- python -m venv venv
- For MacOS:- python3 -m venv venv

# 2) Activate the Virtual Environment
- For Windows:- venv\Scripts\activate
- For MacOS:- source venv/bin/activate

# Install Dependencies
pip install -r requirements.txt

# Run the Development Server
python manage.py runserver
```
**Backend should be running at:**  `http://127.0.0.1:8000/`

### 💻 Start The Frontend
```bash
cd talentsccout-frontend

# Install Node.js Dependencies
npm install

# Run the Frontend Development Server
npm run dev
```
**Frontend should be running at:**  `http://localhost:5173/`

## # Contributors

The TalentScout platform was brought to life by a dedicated team of developers:

- **Dulhan Perera** - Team Leader
- **Dinuka Heshan** - Team Member
- **Linuka Rivi Rihan** - Team Member
- **Sulan Kumarapperuma** - Team Member
- **Chamath Mahapatuna** - Team Member
- **Agrani Ranathunga** - Team Member