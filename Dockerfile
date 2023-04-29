FROM node:18 as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#FROM nginx:latest
FROM nginx:stable
RUN apt-get update
RUN apt-get install bash -y
RUN apt-get install netcat -y
RUN apt-get install vim -y
RUN apt-get install iputils-ping -y
RUN apt-get install curl -y
RUN rm -rf /var/lib/apt/lists/* /etc/apt/sources.list.d/*
COPY nginx.conf /etc/nginx
RUN mkdir -p /etc/nginx/logs 
COPY --from=builder /app/dist /usr/share/nginx/html



