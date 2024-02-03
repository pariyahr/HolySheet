from web_project.settings import *

DEBUG = False

ALLOWED_HOSTS = ["backend"]

CSRF_TRUSTED_ORIGINS = ['http://localhost:8000', 'http://localhost:8080', 'http://localhost', 'http://backend', 'http://backend:8000']

DATABASES = {
    "default": {
        "ENGINE": os.environ.get("SQL_ENGINE", "django.db.backends.sqlite3"),
        "NAME": os.environ.get("SQL_DATABASE", BASE_DIR / "db.sqlite3"),
        "USER": os.environ.get("SQL_USER", ""),
        "PASSWORD": os.environ.get("SQL_PASSWORD", ""),
        "HOST": os.environ.get("SQL_HOST", ""),
        "PORT": os.environ.get("SQL_PORT", ""),
    }
}
