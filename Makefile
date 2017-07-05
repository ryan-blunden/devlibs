docker-build-python:
	docker build --file docker/python-devlibs.Dockerfile -t python-devlibs:latest .

docker-build-nginx:
	docker build --file docker/nginx-devlibs.Dockerfile -t nginx-devlibs:latest .

mock-server: docker-build-nginx
	docker run -v ${PWD}/data:/var/www/api/v1 -p 8080:80 nginx-devlibs
