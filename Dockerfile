FROM node:16-slim
WORKDIR /opt/app

COPY package.json package-lock.json ./
COPY app/ ./app/
COPY config/ ./config/
COPY views/ ./views/

RUN npm install
