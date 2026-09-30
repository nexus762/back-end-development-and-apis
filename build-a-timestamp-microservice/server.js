import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(import.meta.dirname + "/views/index.html");
});

// Do not change code above this line
app.get("/api", (req, res) => {
  const now = new Date();
  res.json({
    unix: now.getTime(),
    utc: now.toUTCString()
  })
})

app.get("/api/:date", (req, res) => {
  let dateInput = req.params.date;

  // Verificar si es un timestamp numérico (ej. "1451001600000")
  if (!isNaN(dateInput)) {
    dateInput = parseInt(dateInput);
  }

  const date = new Date(dateInput);

  // Validar si la fecha es inválida
  if (date.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  // Responder con formato unix y utc
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});
// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
