FROM nginx:1.13-alpine

RUN rm /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/www/api/v1
WORKDIR /var/www/
COPY ./data /var/www/api/v1
COPY ./conf/nginx-devlibs.conf /etc/nginx/conf.d/
