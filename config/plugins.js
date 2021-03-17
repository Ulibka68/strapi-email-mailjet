module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "mailjet",
    providerOptions: {
      publicApiKey: env("MAILJET_PUBLIC_KEY"),
      secretApiKey: env("MAILJET_SECRET_KEY"),
    },
    settings: {
      defaultFrom: "ggvlasov@gmail.com",
      defaultFromName: "Scott from iJS.to",
      defaultTo: "ggvlasov@gmail.com",
      defaultToName: "Johnny Bravodoe",
    },
  },
  // ...
});
