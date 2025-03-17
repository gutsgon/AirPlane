const express = require("express");
const router = express.Router();
const PassengerController = require("../controllers/PassengerController");
const { verifyAuth } = require("../middleware/auth");

router.get("/passenger", PassengerController.getPassenger);
router.post("/passenger", verifyAuth, PassengerController.postPassenger);
router.put(
  "/passenger/:passenger_id",
  verifyAuth,
  PassengerController.putPassenger
);
router.delete(
  "/passenger/:passenger_id",
  verifyAuth,
  PassengerController.deletePassenger
);

module.exports = router;
