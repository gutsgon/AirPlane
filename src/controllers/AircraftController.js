const MessageModel = require("../models/MessageModel");
const ResponseModel = require("../models/ResponseModel");
const AircraftService = require("../services/AircraftService");
class AircraftController {
  async getAircraft(req, res) {
    try {
      const result = await AircraftService.getAircraft();
      const response = ResponseModel(
        200,
        result,
        MessageModel.getSucess("avião")
      );
      res.status(200).send(response);
    } catch (error) {
      console.log(error);
      const response = ResponseModel(404, null, MessageModel.getFail("avião"));
      res.status(404).send(response);
    }
  }

  async postAircraft(req, res) {
    try {
      const { model, manufacturer, capacity } = req.body;
      const result = await AircraftService.postAircraft(
        model,
        manufacturer,
        capacity
      );
      const response = ResponseModel(
        200,
        result,
        MessageModel.postSucess("avião")
      );
      res.status(200).send(response);
    } catch (error) {
      const response = ResponseModel(404, null, MessageModel.postFail("avião"));
      res.status(404).send(response);
    }
  }

  async putAircraft(req, res) {
    try {
      const { aircraft_id } = req.params;
      const { model, manufacturer, capacity } = req.body;
      const result = await AircraftService.putAircraft(
        aircraft_id,
        model,
        manufacturer,
        capacity
      );
      const response = ResponseModel(
        200,
        result,
        MessageModel.putSucess("avião")
      );
      res.status(200).json(response);
    } catch (error) {
      const response = ResponseModel(404, null, MessageModel.putFail("avião"));
      res.status(404).send(response);
    }
  }

  async deleteAircraft(req, res) {
    try {
      const { aircraft_id } = req.params;
      const result = await AircraftService.deleteAircraft(aircraft_id);
      const response = ResponseModel(
        200,
        result,
        MessageModel.deleteSucess("avião")
      );
      res.status(200).send(response);
    } catch (error) {
      const response = ResponseModel(
        404,
        null,
        MessageModel.deleteFail("avião")
      );
      res.status(404).send(response);
    }
  }
}

module.exports = new AircraftController();
