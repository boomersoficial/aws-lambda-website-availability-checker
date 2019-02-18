'use strict';

const AWS = require('aws-sdk');


module.exports = async (url, metricNamespace, metricName, isWebsiteUp) => {

  const metric = {
    MetricData: [ 
      {
        MetricName: metricName,
        Dimensions: [
          {
            Name: 'Disponibilidade',
            Value: url
          },
        ],
        Timestamp: new Date(),
        Unit: 'Count',
        Value: isWebsiteUp? 100 : 0
      },
    ],
    Namespace: metricNamespace
  };

  const cloudwatch = new AWS.CloudWatch();
  await cloudwatch.putMetricData(metric).promise();
};