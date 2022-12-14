const swaggerAutogen = require("swagger-autogen")({ language: "tr", openapi: "3.0.3" });

const outputFile = "./output.json";
const endpointsFiles = ["../routes/index.js"];

const doc = {
  info: {
    title: "Node Simple",
    description: "Açıklama",
    version: "0.0.2",
  },

  servers: [
    {
      url: "localhost:3000/api/v1",
    },
    {
      url: "https://combative-cyan-pocket.cyclic.app/api/v1",
    },
  ],
  schemes: ["http", "https"],
  tags: [
    {
      name: "test",
      description: "",
    },
    {
      name: "test2",
      description: "",
    },
  ],
};

swaggerAutogen(outputFile, endpointsFiles, doc);
