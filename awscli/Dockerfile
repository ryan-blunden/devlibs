FROM devlibs-python:latest

WORKDIR /usr/src/app

RUN pip install pip awsebcli awscli --upgrade

RUN echo "\n# AWS and EB CLI bash completion\nsource /usr/local/bin/eb_completion.bash\ncomplete -C '/usr/local/bin/aws_completer' aws" >> /root/.bashrc

CMD ["bash"]
