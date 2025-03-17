const MessageModel = require("../models/MessageModel");
const ResponseModel = require("../models/ResponseModel");
const FlightService = require("../services/FlightService");

class FlightController {
  async getFlight(req, res) {
    try {
      const result = await FlightService.getFlight();
      const response = ResponseModel(
        200,
        result,
        MessageModel.getSucess("voo")
      );
      res.status(200).send(response);
    } catch (error) {
      const response = ResponseModel(404, null, MessageModel.getFail("voo"));
      res.status(404).send(response);
    }
  }

  async postFlight(req, res) {
    try {
      const {
        flight_number,
        departure_airport,
        arrival_airport,
        departure_time,
        arrival_time,
        aircraft_id,
      } = req.body;
      const result = await FlightService.postFlight(
        flight_number,
        departure_airport,
        arrival_airport,
        departure_time,
        arrival_time,
        aircraft_id
      );
      const response = ResponseModel(
        201,
        result,
        MessageModel.postSucess("voo")
      );
      res.status(201).send(response);
    } catch (error) {
      const response = ResponseModel(404, null, MessageModel.postFail("voo"));
      res.status(404).send(response);
    }
  }

  async putFlight(req, res) {
    try {
      const { flight_id } = req.params;
      const {
        flight_number,
        departure_airport,
        arrival_airport,
        departure_time,
        arrival_time,
        aircraft_id,
      } = req.body;
      const result = await FlightService.putFlight(
        flight_id,
        flight_number,
        departure_airport,
        arrival_airport,
        departure_time,
        arrival_time,
        aircraft_id
      );
      const response = ResponseModel(
        200,
        result,
        MessageModel.putSucess("voo")
      );
      res.status(200).send(response);
    } catch (error) {
      const response = ResponseModel(404, null, MessageModel.putFail("voo"));
      res.status(404).send(response);
    }
  }

  async deleteFlight(req, res) {
    try {
      const { flight_id } = req.params;
      const result = await FlightService.deleteFlight(flight_id);
      const response = ResponseModel(
        200,
        result,
        MessageModel.deleteSucess("voo")
      );
      res.status(200).send(response);
    } catch (error) {
      const response = ResponseModel(404, null, MessageModel.deleteFail("voo"));
      res.status(404).send(response);
    }
  }
}

module.exports = new FlightController();
