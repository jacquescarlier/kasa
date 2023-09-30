# Stage 1: Build the React application 
FROM node:18 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm  build

EXPOSE 80