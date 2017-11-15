FROM python:3.6.3-slim

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y nano wget jq && \
    rm -rf /var/lib/apt/lists/*

RUN pip install pip awscli --upgrade

RUN echo "\ncomplete -C '/usr/local/bin/aws_completer' aws\naws configure" >> /root/.bashrc

WORKDIR /usr/src/app

CMD ["bash"]
