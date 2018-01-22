##################
#  STACK DEPLOY  #
##################

stack:
	docker-compose up

#########
#  API  #
#########

API_IMAGE_NAME=devlibs-api

api-build:
	docker build --force-rm -t $(API_IMAGE_NAME):latest $(CURDIR)/api

api-run-dev: api-build
	docker run --rm --name devlis_api_dev -v $(CURDIR)/api/data:/var/www/api/v1 -p 8080:80 $(API_IMAGE_NAME):latest

api-run: api-build
	docker run -d --name devlis_api -p 80:80 --restart on-failure $(API_IMAGE_NAME):latest


############
#  CLIENT  #
############

##
# An Angular client for the DevLibs server.
##

ANGULAR_IMAGE_NAME=devlibs-angular

angular-build:
	docker build --build-arg VERSION=8 -t $(ANGULAR_IMAGE_NAME):latest $(CURDIR)/client

angular-run: angular-build
	docker run --rm --init -p 4200:4200 -P $(ANGULAR_IMAGE_NAME):latest ng serve --host 0.0.0.0

angular-run-dev: angular-build
	docker run --rm --init -p 4200:4200 -P -v $(CURDIR)/client:/usr/src/app $(ANGULAR_IMAGE_NAME):latest bash -c 'npm install && ng serve --host 0.0.0.0'

angular-build-prod: angular-build
	docker run --rm -v $(CURDIR)/client:/usr/src/app $(ANGULAR_IMAGE_NAME):latest bash -c 'npm install && ng build --prod'
