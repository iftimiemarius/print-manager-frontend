FROM node:16.16.0-alpine

WORKDIR /src

COPY package.json src/
COPY package-lock.json /src
COPY /public /src/public

RUN npm install
