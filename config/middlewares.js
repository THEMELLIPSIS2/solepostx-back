module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'cdn.tiny.cloud',
          ],
          "script-src": [
            "cdn.tiny.cloud",
            "self",
            "'self'",
            "data:",
            "blob:",
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'cdn.tiny.cloud',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },  
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
