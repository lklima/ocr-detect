const express = require("express");
const app = express();
const vision = require("@google-cloud/vision");
// Creates a client
const client = new vision.ImageAnnotatorClient({
  keyFilename: "key.json",
});

// Detecçao do texto a partir da foto
client
  .textDetection("./text.png")
  .then((result) => {
    const { locale, description } = result[0].textAnnotations[0];

    console.log("Idioma:", locale);
    console.log("-----Texto-----");
    console.log(description);
  })
  .catch((err) => {
    console.error("ERROR:", err);
  });

app.listen(5000, "127.0.0.1", () => console.log("Server running"));
