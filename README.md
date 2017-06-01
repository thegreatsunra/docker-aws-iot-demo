# docker-aws-iot-demo

> Lightweight demo of AWS IoT messaging from a Docker container

## Getting started

Most of this is based on [this guide](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/).

### Prerequisites

1. [Install Docker](https://store.docker.com/search?type=edition&offering=community)
1. [Install Node](https://nodejs.org)
1. [Install Git](https://git-scm.com/downloads)

### Install, build, and run

1. Start Docker on your computer
1. Clone this repo `git clone https://github.com/thegreatsunra/docker-web-app.git`
1. Build the Docker container `cd docker-web-app && docker build -t <your username>/node-web-app .`
1. Run the container in detached mode `docker run -p 49160:8080 -d <your username>/node-web-app`
1. Open [http://localhost:49160](http://localhost:49160) in your web browser to view your Node app

### Shutting down
1. Run `docker ps` and note the `CONTAINER ID` for your running Docker container
1. Run `docker stop <container id>` to stop the container

## License

The MIT License (MIT)

Copyright (c) 2017 Dane Petersen
