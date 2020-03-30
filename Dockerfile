FROM node:12.13.0-slim

MAINTAINER alec 
WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY src ./src
COPY public ./public
COPY README.md .

RUN npm install

EXPOSE 2369
VOLUME /app/logs

CMD npm start
