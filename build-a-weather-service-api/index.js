import express from 'express';
import router from './weather.js'
const app = express();

const PORT = 3000;

app.get("/api/info", (req, res) => {
  res.json({
    name: "Weather Service API",
    version: "1.0.0",
    endpoints: ["/api/weather/:city", "/api/greet/:name", "/api/data"],
  });
});

app.get("/", (req, res) => {
  res.send("BienvenidoS")
})

app.get("/api/status", (req, res) => {
  res.status(200).json({
    status: 200
  })
})

app.get("/docs", (req, res) => {
  res.redirect("/api/info")
})

app.get("/api/greet/:name", (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}` })
})

app.route("/api/data").get((req, res) => {
  res.json({})
}).post((req, res) => {
  res.status(201).json({})
})

app.use("/api/weather", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});