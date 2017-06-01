FROM node:7.10.0

## Update linux
RUN apt-get update -y \
    && \
    apt-get upgrade -y \
    && \
    apt-get clean \
    && \
    rm -rf /var/lib/apt/lists/*

## Update npm
## This results in semver errors
# RUN npm install -g npm@4.6.1
## This doesn't actually do anything
# RUN npm update -g npm@4.6.1

## Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

## Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

## Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]
