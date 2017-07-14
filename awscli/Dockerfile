FROM devlibs-python:latest

WORKDIR /usr/src/app

RUN pip install awsebcli --upgrade && \
    eb --version && \
    \
    pip install awscli --upgrade && \
    aws --version
