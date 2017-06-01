# docker-web-app

> Node.js on Docker

## Getting started

Everything here is based on [this guide](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/).

### Prerequisites

1. [Install Docker](https://store.docker.com/search?type=edition&offering=community)
1. [Install Node](https://nodejs.org)
1. [Install Git](https://git-scm.com/downloads)

### Install, build, and run

1. Start Docker on your computer
1. Clone this repo `git clone https://github.com/thegreatsunra/docker-web-app.git`
1. Build the Docker container `cd docker-web-app && docker build -t <your username>/node-web-app .`
1. Run the container `docker run -p 49160:8080 <your username>/node-web-app`
1. Open [http://localhost:8080](http://localhost:8080) in your web browser to view your Node app

## License

The MIT License (MIT)

Copyright (c) 2017 Dane Petersen
