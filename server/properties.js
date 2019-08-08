module.exports = {
  factomskaffolder_db: {
    name: "factomskaffolder_db",
    user: "postgres",
    password: null,
    host: process.env.DB_HOST || "127.0.0.1",
    port: 5433,
    dialect: "postgres"
  },


  // Factom properties
  factom: {
    config: {
      baseUrl: "https://ephemeral.api.factom.com/v1",
      accessToken: {
        appId: "cb2ad367",
        appKey: "5069a585b3ba8f4e9cd7df0e97dd2277"
      }
    },
    model: {
      // Start Factom model properties
      Doctor: {
        factomized: "",
        has_identity: true
      },
      Patient: {
        factomized: "Doctor",
      },
      Report: {
        factomized: "",
      },
      User: {
        factomized: "",
      },

      // End Factom model properties
    }
  },

  publicPath: "../client/dist",
  port: 3000,
  tokenSecret: "Insert Your Secret Token",
  api: "/api"
};
