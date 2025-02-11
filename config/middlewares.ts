export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::cors",
    config: {
      origin: "http://localhost:1337",
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
      headers: "*",
    },
  },
];
