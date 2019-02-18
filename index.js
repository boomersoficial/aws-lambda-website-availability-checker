'use strict';

const ping = require('./ping');
const sendMetric = require('./send_metrics');

exports.handler = async (event) => {
  
  if (!event) {
    console.log('[AwsLambda-Website-Availability-Checker] Data not provided');
    return;
  }

  if (!event.url ) {
    console.log('[AwsLambda-Website-Availability-Checker] Url not provided');
    return;
  }

  if (!event.metricNamespace) {
    console.log('[AwsLambda-Website-Availability-Checker] MetricNamespace not provided');
    return;
  }

  if (!event.metricName) {
    console.log('[AwsLambda-Website-Availability-Checker] MetricName not provided');
    return;
  }

  const isWebsiteUpAndRunning = await ping(event.url);
  await sendMetric(event.url, event.metricNamespace, event.metricName, isWebsiteUpAndRunning)

  console.log('isWebsiteUpAndRunning: ', isWebsiteUpAndRunning);

};

