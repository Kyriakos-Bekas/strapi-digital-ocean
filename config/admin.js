module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd2f4eec0a835b1983b84ff59d0b642a5'),
  },
});
