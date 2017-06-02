/*
 * Copyright 2010-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

// node.js deps

// npm deps

// app deps
const deviceModule = require('aws-iot-device-sdk').device
const cmdLineProcess = require('aws-iot-device-sdk/examples/lib/cmdline')

// begin module

function processTest (args) {
  //
  // The device module exports an MQTT instance, which will attempt
  // to connect to the AWS IoT endpoint configured in the arguments.
  // Once connected, it will emit events which our application can
  // handle.
  //
  const device = deviceModule({
    keyPath: args.privateKey,
    certPath: args.clientCert,
    caPath: args.caCert,
    clientId: args.clientId,
    region: args.region,
    baseReconnectTimeMs: args.baseReconnectTimeMs,
    keepalive: args.keepAlive,
    protocol: args.Protocol,
    port: args.Port,
    host: args.Host,
    debug: args.Debug
  })

  let timeout // eslint-disable-line no-unused-vars
  let count = 0
  const minimumDelay = 1000

  if ((Math.max(args.delay, minimumDelay)) !== args.delay) {
    console.log('substituting ' + minimumDelay + 'ms delay for ' + args.delay + 'ms...')
  }
  timeout = setInterval(() => {
    count++
    let now = new Date()
    let timestamp = now.toISOString()
    let message = {
      timestampUTC: timestamp,
      messageCount: count,
      payload: {
        keyOne: true,
        keyTwo: 'value'
    }
    }
    device.publish('awsIotDemo', JSON.stringify(message))
    console.log('AWS IoT - device published: \n', JSON.stringify(message), '\n')
  }, Math.max(args.delay, minimumDelay)) // clip to minimum
  device
    .on('connect', () => {
      console.log('AWS IoT - device connected')
    })
  device
    .on('close', () => {
      console.log('AWS IoT - connection closed')
    })
  device
    .on('reconnect', () => {
      console.log('AWS IoT - device reconnected')
    })
  device
    .on('offline', () => {
      console.log('AWS IoT - device offline')
    })
  device
    .on('error', (error) => {
      console.log('AWS IoT - error', error)
    })
  device
    .on('message', (topic, payload) => {
      console.log('AWS IoT - device message', topic, payload.toString())
    })
}

module.exports = cmdLineProcess

if (require.main === module) {
  cmdLineProcess('connect to the AWS IoT service and publish/subscribe to topics using MQTT, test modes 1-2',
  process.argv.slice(2), processTest)
}
