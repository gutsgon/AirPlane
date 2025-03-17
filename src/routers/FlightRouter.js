const express = require("express");
const router = express.Router();
const FlightController = require("../controllers/FlightController");
const { verifyAuth } = require("../middleware/auth");

router.get("/flight", verifyAuth, FlightController.getFlight);
router.post("/flight", verifyAuth, FlightController.postFlight);
router.put("/flight/:flight_id", verifyAuth, FlightController.putFlight);
router.delete("/flight/:flight_id", verifyAuth, FlightController.deleteFlight);

module.exports = router;