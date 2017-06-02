# docker-aws-iot-demo

> Lightweight demo of AWS IoT messaging from a Docker container

## Getting started

Most of this is based on [this guide](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

### Prerequisites

1) Install [node](https://nodejs.org/en/)
2) Install [git](https://git-scm.com/downloads)
3) Install [yarn](https://yarnpkg.com/lang/en/docs/install/)
4) Install [Docker](https://store.docker.com/search?type=edition&offering=community)

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

1) Move all the files you downloaded (the certificate, public key, private key, and root CA) from AWS IoT into the `certs/` folder of this project, and rename the files to `certificate.pem.crt`, `public.pem.key`, `private.pem.key`, and `root-CA.crt`
2) Open `package.json` and find the `start` script (should be around line 30)

## Build and run the container

1) Build the Docker container
```bash
docker build --no-cache -t <your_username>/docker-aws-iot-demo .
```
2) Run the container in detached mode
```bash
docker run -d <your_username>/docker-aws-iot-demo
```
3) When you run the above command, Docker will output a long hexidecimal string. This is your `<container_id>`
4) Run `docker logs <container_id>` to make sure your Docker container successfully started up

## Confirm messages are streaming to AWS IoT

1) With your Docker container running, go to your AWS IoT home screen and click the "Test" menu option
2) Under "Subscribe to a topic" enter `awsIotDemo` as your "Subscription topic"
3) Click "Subscribe to topic"
4) Click the "awsIotDemo" menu item that appears beneath "Subscribe to a topic" in the left menu
5) You should see messages streaming in!
6) Run `docker stop <container_id>` to stop the container

## License

The MIT License (MIT)

Copyright (c) 2017 Dane Petersen
