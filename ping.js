'use strict';

const fetch = require("node-fetch");

const HTTP_STATUS_OK = 200;
const HTTP_STATUS_NOT_MODIFIED = 304;

module.exports = async (url) => {
  
  try {
    const response = await fetch(url);
    const isWebSiteUp = response.status == HTTP_STATUS_OK || response.status == HTTP_STATUS_NOT_MODIFIED;

    return isWebSiteUp;
  } catch (ex) {
    return false;
  }
}