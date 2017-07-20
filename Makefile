#########
#  API  #
#########

API_IMAGE_NAME=devlibs-api

api-build:
	docker build -t $(API_IMAGE_NAME):latest $(PWD)/api

api-run: api-build
	docker run --rm -v $(PWD)/api/data:/var/www/api/v1 -p 8080:80 $(API_IMAGE_NAME)


############
#  CLIENT  #
############

##
# An Angular client for the DevLibs server.
##

ANGULAR_IMAGE_NAME=devlibs-angular

angular-build:
	docker build --build-arg VERSION=8 -t $(ANGULAR_IMAGE_NAME):latest $(PWD)/client

angular-run: angular-build
	docker run --rm --init -it -p 4200:4200 -P $(ANGULAR_IMAGE_NAME) ng serve --host 0.0.0.0

angular-run-edit:
	docker run --rm --init -it -p 4200:4200 -P -v $(PWD)/client:/usr/src/app $(ANGULAR_IMAGE_NAME) ng serve --host 0.0.0.0	


############
#  PYTHON  #
############

##
# A Python base image based off Debian stretch.
##

PYTHON_IMAGE_NAME=devlibs-python

python-build:
	docker build -t $(PYTHON_IMAGE_NAME):latest $(PWD)/python

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
	docker build -t $(AWS_CLI_IMAGE_NAME):latest $(PWD)/awscli

awscli-run: awscli-build
	docker run --rm -it -v $(PWD)/:/usr/src/app $(AWS_CLI_IMAGE_NAME):latest bash


##############
#  TERMINAL  #
##############

##
# A simple terminal app, simply so we can deploy a multi-container Elastic Beanstalk application.
##

TERMINAL_IMAGE_NAME=devlibs-terminal

terminal-build: python-build
	docker build -t $(TERMINAL_IMAGE_NAME):latest $(PWD)/terminal

terminal-run: terminal-build
	docker run --rm -it $(TERMINAL_IMAGE_NAME):latest
