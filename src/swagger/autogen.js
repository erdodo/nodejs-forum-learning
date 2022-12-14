const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./output.json";
const endpointsFiles = ["../routes/index.js"];

const doc = {
  info: {
    title: "Node Simple",
    description: "Açıklama",
    version: "0.0.1",
  },
  host: "localhost:3000/api/v1",
  schemes: ["http"],
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
