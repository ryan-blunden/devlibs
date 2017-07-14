#########
#  API  #
#########

API_IMAGE_NAME=devlibs-api

api-build:
	docker build -t $(API_IMAGE_NAME):latest $(PWD)/api

api-run: api-build
	docker run --rm -v $(PWD)/api/data:/var/www/api/v1 -p 8080:80 $(API_IMAGE_NAME)


##############
#  TERMINAL  #
##############

TERMINAL_IMAGE_NAME=devlibs-terminal

terminal-build:
	docker build -t $(TERMINAL_IMAGE_NAME):latest $(PWD)/terminal

terminal-run: terminal-build
	docker run --rm -it $(TERMINAL_IMAGE_NAME):latest
