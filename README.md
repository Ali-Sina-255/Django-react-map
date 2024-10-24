# Location Finder with Django and React

This project is a full-stack web application that allows users to search for locations on a map using Django for the backend and React for the frontend. The map functionality is implemented using popular map APIs (e.g., Google Maps, OpenStreetMap).

## Features
- Search for locations using an interactive map.
- Display markers for searched locations.
- Save locations to the backend database (optional).
- Mobile responsive design.

## Technology Stack
- **Backend**: Django (Python)
- **Frontend**: React (JavaScript)
- **Map API**: Google Maps API / OpenStreetMap / Leaflet.js
- **Database**: SQLite (default), can be replaced with PostgreSQL or MySQL.
- **Styling**: Tailwind CSS or Bootstrap (your preference).

## Setup Instructions

### Prerequisites
Make sure you have the following installed on your machine:
- Python 
- Django 
- npm or yarn (for React)

### Backend (Django)

1. Clone the repository:
   ```bash
   git clone git@github.com:Ali-Sina-255/Django-react-map.git
   cd backend

### Create a virtual environment and activate it:
   python3 -m venv env
source env/bin/activate  # On Windows, use `env\Scripts\activate`
## Install Django and other dependencies:
pip install -r requirements.txt
## Run database migrations:
python manage.py migrate
### Start the Django server:
python manage.py runserver

### Frontend (React)

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install  # Or `yarn install`
   ```

3. Start the React development server:
   ```bash
   npm start  # Or `yarn start`
   ```
