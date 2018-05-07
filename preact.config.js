const preactCliSwPrecachePlugin = require("preact-cli-sw-precache");

export default function(config) {
  const precacheConfig = {
    staticFileGlobs: [
      "/index.html",
      "/assets/favicon.ico",
      "/bundle.*.css",
      "/bundle.*.js"
    ],
    runtimeCaching: [
      {
        urlPattern: /\/content\/blocks\//,
        handler: "cacheFirst",
        options: {
          cache: {
            maxEntries: 10,
            name: "blocks-cache"
          }
        }
      },
      {
        urlPattern: /\/content\/posts/,
        handler: "cacheFirst",
        options: {
          cache: {
            maxEntries: 10,
            name: "posts-cache"
          }
        }
      }
    ],
    filename: "sw.js",
    clientsClaim: true,
    skipWaiting: true
  };

  return preactCliSwPrecachePlugin(config, precacheConfig);
}
