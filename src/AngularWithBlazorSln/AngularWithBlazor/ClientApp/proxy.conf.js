const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:8710';

const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/_blazor",
      "/_content",
      "/_framework"
   ],
    target: target,
    secure: false
  }
]

module.exports = PROXY_CONFIG;
