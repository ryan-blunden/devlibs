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
	docker build -t $(API_IMAGE_NAME):latest $(CURDIR)/api

api-run-dev: api-build
	docker run --rm -v $(CURDIR)/api/data:/var/www/api/v1 -p 8080:80 $(API_IMAGE_NAME)

api-run: api-build
	docker run -d --name devlis_api -p 80:80 --restart on-failure $(API_IMAGE_NAME)


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
	docker run --rm --init -p 4200:4200 -P $(ANGULAR_IMAGE_NAME) ng serve --host 0.0.0.0

angular-run-edit: 
	docker run --rm --init -p 4200:4200 -P -v $(CURDIR)/client:/usr/src/app $(ANGULAR_IMAGE_NAME) bash -c 'npm install && ng serve --host 0.0.0.0'

angular-build-prod:
	docker run --rm -v $(CURDIR)/client:/usr/src/app $(ANGULAR_IMAGE_NAME) bash -c 'npm install && ng build --prod'


############
#  PYTHON  #
############

##
# A Python base image based off Debian stretch.
##

PYTHON_IMAGE_NAME=devlibs-python

python-build:
	docker build -t $(PYTHON_IMAGE_NAME):latest $(CURDIR)/python

python-run: terminal-build
	docker run -it $(PYTHON_IMAGE_NAME):latest



######################
#  AWS (AND EB) CLI  #
######################

##
# Docker isn't just great for running our apps in the cloud. It's also awesome at "containing" things such as the
# Elastic Beanstalk and AWS CLI so we don't have to go through the pain of setting them up on our development machines.
#
# We install the AWS CLI but also the EB CLI. The AWS CLI can do everything that the EB CLI can do, but the EB CLI just
# makes somethings as bit easier so we include it.
#
# It's ok if this doesn't make a lot of sense right now, just know that it's saving you a lot of time and pain :).
##

AWS_CLI_IMAGE_NAME=devlibs-awscli

awscli-build: python-build
	docker build -t $(AWS_CLI_IMAGE_NAME):latest $(CURDIR)/awscli

awscli-run: awscli-build
	docker run --rm -it -v $(CURDIR)/:/usr/src/app $(AWS_CLI_IMAGE_NAME):latest
