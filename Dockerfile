FROM node:12.13.0-slim

MAINTAINER alec 
WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY src ./src
COPY server ./server
COPY public ./public
COPY README.md .

RUN npm install

EXPOSE 2370
VOLUME /app/logs

CMD npm start
