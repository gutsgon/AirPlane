const express = require("express");
const sequelize = require("./src/database/database");
const app = express();
const PORT = 3000;

const AircraftRouter = require("./src/routers/AircraftRouter");
const BoardingPassRouter = require("./src/routers/BoardingPassRouter");
const FlightRouter = require("./src/routers/FlightRouter");
const PassengerRouter = require("./src/routers/PassengerRouter");
const SysUserRouter = require("./src/routers/SysUserRouter");
const AuthRouter = require("./src/routers/AuthRouter");
const { verifyAuth } = require("./src/middleware/auth");

app.use(express.json());
app.use(AircraftRouter);
app.use(BoardingPassRouter);
app.use(FlightRouter);
app.use(PassengerRouter);
app.use(SysUserRouter);
app.use(AuthRouter);

// Rota para a raiz
app.get("/", (req, res) => {
  res.send("Bem-vindo à API!");
});

// Rota de teste para o banco de dados
app.get("/teste", verifyAuth, async (req, res) => {
  try {
    await sequelize.authenticate();
    res.status(200).json({ message: "Conexão com o banco está OK!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao conectar com o banco!", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
