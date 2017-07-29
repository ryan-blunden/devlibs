# Allows the version to be controlled via the `docker build` command.
# Means we can build images with different Node versions without changing the Dockerfile
ARG VERSION=8

FROM node:${VERSION}

ENV TERM xterm-color
ARG DEBIAN_FRONTEND=noninteractive

ARG DEV_SERVER_PORT=4200
ARG NODE_DEBUG_PORT=5858
ARG V8_INSPECTOR_PORT=9229
EXPOSE $DEV_SERVER_PORT $NODE_DEBUG_PORT $V8_INSPECTOR_PORT

ARG APP_DIR=/usr/src/app
WORKDIR $APP_DIR

# Hard-code $NODE_ENV as we ony need Node for development (server, test etc).
ENV NODE_ENV development

# Make for easy calling of node_modules binaries.
ENV PATH ${APP_DIR}/node_modules/.bin:$PATH

# Healthcheck (need to expose `DEV_SERVER_PORT`
ENV DEV_SERVER_PORT=$DEV_SERVER_PORT
HEALTHCHECK CMD curl --fail http://localhost:${DEV_SERVER_PORT}/ || exit 1

# Update, upgrade install dependencies
RUN apt-get update -y && \
    apt-get upgrade -y && \
    \
    # Cleanup to reduce image size \
    \
    apt-get clean -y && \
    apt-get autoclean -y && \
    apt-get autoremove -y && \
    rm -rf /usr/share/locale/* && \
    rm -rf /var/cache/debconf/*-old && \
    rm -rf /var/lib/apt/lists/* && \
    rm -rf /usr/share/doc/* && \
    \
    # Upgrade npm using Yarn
    yarn global add npm@5

COPY . ${APP_DIR}
RUN npm install --allow-root

CMD ["npm", "run-script"]
