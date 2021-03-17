module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '7cbc1adee9eb7b92ef909a824552303f'),
    },
  },
  cron: {
    enabled: true
  }
});
