'use strict';

const ping = require('./ping');
const sendMetric = require('./send_metrics');

function validateProperties (event) {
  if (!event) 
    throw new Error('[AwsLambda-Website-Availability-Checker] Data not provided');

  if (!event.url )
    throw new Error('[AwsLambda-Website-Availability-Checker] Url not provided');

  if (!event.metricNamespace)
    throw new Error('[AwsLambda-Website-Availability-Checker] MetricNamespace not provided');

  if (!event.metricName)
    throw new Error('[AwsLambda-Website-Availability-Checker] MetricName not provided');
}

exports.handler = async (event) => {

  try {
    validateProperties(event);

    const isWebsiteUpAndRunning = await ping(event.url);
    await sendMetric(event.url, event.metricNamespace, event.metricName, isWebsiteUpAndRunning);

    console.log(`Is website up: ${isWebsiteUpAndRunning}`);
  } catch (ex) {
    console.log(ex);
  } 
};

