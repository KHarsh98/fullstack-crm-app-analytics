# Project Features
1. Fully functioning CRM application using Django rest framework and react admin.
2. Dynamic dashboard that updates when the data changes. 
3. API Schema can be viewed at ```localhost:8000/api``` and APIs can be filtered, paginated, sorted, etc.

# Installation
## Set up backend
1. ```pip install -r requirements.txt``` inside the backend folder.
2. ```python manage.py makemigrations``` followed by ```python manage.py migrate```
3. ```python manage.py runserver``` to run the server

## Set up frontend
1. ```npm i ``` inside the react-admin/frontend folder.
2. ```npm start``` to start the server.

## Misc
1. create a superuser inside the django admin database to start using the app using ```python manage.py createsuperuser```
