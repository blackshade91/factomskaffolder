module.exports = {
  factomskaffolder_db: {
    name: "factomskaffolder_db",
    user: "postgres",
    password: "",
    host: "localhost",
    port: 5433,
    dialect: "postgres"
  },

  // Start FA
  factom: {
    config: {
      baseUrl: "https://ephemeral.api.factom.com/v1",
      accessToken: {
        appId: "cb2ad367",
        appKey: "5069a585b3ba8f4e9cd7df0e97dd2277"
      }
    },
    model: {
      Doctor: {
        factomized: null,
        has_identity: true
      },
      Patient: {
        factomized: "Doctor", // This should be the same model name as we have in the model document.
        has_identity: false
      },
      Report: {
        factomized: "Doctor", // This should be the same model name as we have in the model document.
        has_identity: false
      }
    }
  },

  publicPath: "../client/dist",
  port: 3000,
  tokenSecret: "Insert Your Secret Token",
  api: "/api"
};
