# docker-aws-iot-demo

> Lightweight demo of AWS IoT messaging from a Docker container

## Getting started

Most of this is based on [this guide](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/).

### Prerequisites

1) Install [node](https://nodejs.org/en/)
2) Install [git](https://git-scm.com/downloads)
3) Install [yarn](https://yarnpkg.com/lang/en/docs/install/)
4) [Install Docker](https://store.docker.com/search?type=edition&offering=community)

### Set up project

1) Start Docker on your computer

2) Clone this repo
```bash
git clone https://github.com/thegreatsunra/docker-aws-iot-demo.git
cd docker-aws-iot-demo
```

## Set up AWS IoT

1) Sign up for AWS
2) Go to the AWS IoT home screen
3) Go to your Registry of Things
4) Create a new Thing
5) Name your Thing

### Create an AWD IoT "Thing" certificate

1) Choose "Security" from the menu
2) Click "Create Certificate"
3) Download "A certificate for this thing"
4) Download "A public key"
5) Download "A private key"
6) Download "A root CA for AWS IoT from Symantec"
7) Click the "Activate" button
8) Click "Done"

### Associate certificates with your project

1) Move all the files you downloaded (the certificate, public key, private key, and root CA) from AWS IoT into the root folder of this project

2) Open `package.json` and find the `start` script (should be around line 30)

3) Update the values for `--private-key`, `--client-certificate`, and `--ca-certificate` to the names of the files you downloaded from AWS IoT and moved into this project

4) Update the value for `--host-name` to your "custom endpoint" on AWS IoT. You can find this value by clicking the "Settings" menu option on your AWS IoT home screen. It should look something like `a1b2c3d4e5f6g7.iot.us-east-1.amazonaws.com`

## Build and run the container with AWS IoT

1) Build the Docker container
```bash
docker build --no-cache -t <your_username>/docker-aws-iot-demo .
```

2) Run the container in detached mode
```bash
docker run -d <your_username>/docker-aws-iot-demo
```

2) Run `docker ps` and note the `CONTAINER ID` for your running Docker container
3) Run `docker logs <container_id>` to see if your Docker container successfully started up
4) Run `docker stop <container_id>` to stop the container

## License

The MIT License (MIT)

Copyright (c) 2017 Dane Petersen
