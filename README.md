# HolySheet
This project is a combination of Django and Vue.js, providing a full-stack web application. It leverages the strengths of Django on the backend and Vue.js on the frontend to create a dynamic and interactive web experience.
## Stack
### Backend (Django):
* Djando: A high-level Python web framework for rapid development.
* Django REST Framework (DRF): A powerful and flexible toolkit for building Web APIs in Django.
### Frontend (Vue.js):
* Vue.js: A progressive JavaScript framework for building user interfaces.
* Vue Router: The official router for Vue.js.
## Prerequisites
Before you begin, ensure you have the following installed:
* Python
* Node.js
* npm (Node Package Manager)
* Django (**`pip install django`**)
* Vue CLI (**`npm install -g @vue/cli`**)
## Getting Started
1. **Clone the repository:**
   ```
    git clone https://github.com/pariyahr/HolySheet.git
    cd HolySheet
   ```
2. **Setup the Backend:**
   ```
   python manage.py migrate
   python manage.py runserver
   ```
    The Django development server will be running at
`http://localhost:8000/`

3. **Setup the Frontend:**
    ```
    cd vue-holysheet
    npm install
    npm run serve
    ```
    The Vue.js development server will be running at
`http://localhost:8080/`

4. Access the Application:
   * Open your browser and navigate to `http://localhost:8080/` to access the Vue.js frontend.
   * For the Django admin panel, visit `http://localhost:8000/admin/` and log in with the admin credentials you created.




