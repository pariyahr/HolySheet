FROM node:21-alpine3.18 AS frontend-builder
WORKDIR /app
COPY vue-holysheet/package*.json ./
RUN npm install
COPY . .
WORKDIR /app/vue-holysheet
RUN npm run build

FROM --platform=linux/amd64 python:3.11.4-slim-buster

ENV DEBIAN_FRONTEND=noninteractive
ENV PIP_DISABLE_PIP_VERSION_CHECK 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y gcc

WORKDIR /backend

RUN pip install -U pip
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
COPY --from=frontend-builder /app/static/dist /backend/static/
COPY --from=frontend-builder /app/templates /backend/templates

CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:8000", "web_project.wsgi"]