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
## فاز سوم پروژه

در این فاز در بخش اول دو داکر فایل اصلی را در پروژه قرار می دهیم. اولی در دایرکتوری اصلی پروژه است و image بک اند را بیلد می کند. این داکر فایل اصلی شامل دو استیج است که در استیج اول فایل های فرانت بیلد می شود و با توجه به فایل های دیستریببیوشنی که فرانت جنریت می کند در استیج دوم سعی بر بیلد اپلیکیشن بک اند که جنگو است را دارد. در ادامه requirements پروژه جنگو و همچنین gcc را نصب می کند.
در ادامه فایل های استیج قبلی که مربوط به فرانت بود را کپی می کند در جهاهای که نیاز به سرو شدن دارند و در نهایت با استفاده از gunicorn آنرا اجرا می کند.
حال داکرفایل بعدی که مربوط به پروکسی معکوس است در آدرس docker\nginx قرار دارد و فایل کانفیگ را ریپلیس می کند. این فایل کانفیگ این کار را انجام می دهد که هر چیزی که به پورت ۸۰ آن می آید را پروکسی می کند که در آن دو حالت وجود دارد : اگر با هرکدام از لوکیشن های داده شده مچ شود از محل مورد نظر در همان کانتینر nginx می خواند و در غیر این صورت به پورت ۸۰۰۰ کانتینر جنگو پروکسی پس می شود.
در فایل docker-compose.yaml هم یک سرویس بک اند که همان image پروژه جنگو است را بالا می آورد و آن به طور دقیق گفته شده است که دیتابیس و هاست و… به چه صورت است فقط وابسته به بالا آمدن سرویس دیتابیس است که آنرا هم بالا می آورد تا سرویس بک اند هم بالا بیاید.
و برای هرکدام از این سرویس ها هم health check  می نویسیم.
در نهایت هم سرویس پروکسی بالا می آید که کانتینر nginx است که پورت ۸۰۸۰ هاست خودمان را به پورت ۸۰ آن کانتینر متصل می کند.
در دایرکتوری settings یک فایل به نام prod.py اضافه شده است که وظیفه آن این است که دیتابیس مارا به حالتی بکند که بتوانیم از environment به آن پاس بدهیم و از این رو بتوانیم به صورت مانا دیتابیس را داشته باشیم.



