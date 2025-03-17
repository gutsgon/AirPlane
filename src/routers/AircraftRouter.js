const express = require("express");
const router = express.Router();
const AircraftController = require("../controllers/AircraftController");
const { verifyAuth } = require("../middleware/auth");

router.get("/aircraft", AircraftController.getAircraft);
router.post("/aircraft", verifyAuth, AircraftController.postAircraft);
router.put(
  "/aircraft/:aircraft_id",
  verifyAuth,
  AircraftController.putAircraft
);
router.delete(
  "/aircraft/:aircraft_id",
  verifyAuth,
  AircraftController.deleteAircraft
);

module.exports = router;
