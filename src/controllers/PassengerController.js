const MessageModel = require("../models/MessageModel");
const ResponseModel = require("../models/ResponseModel");
const PassengerService = require("../services/PassengerService");

class PassengerController {
  async getPassenger(req, res) {
    try {
      const result = await PassengerService.getPassenger();
      const response = ResponseModel(
        200,
        result,
        MessageModel.getSucess("passageiro")
      );
      res.status(200).send(response);
    } catch (error) {
      const response = ResponseModel(
        404,
        null,
        MessageModel.getFail("passageiro")
      );
      res.status(404).send(response);
    }
  }

  async postPassenger(req, res) {
    try {
      const { first_name, last_name, birth_date, passport_number } = req.body;
      const result = await PassengerService.postPassenger(
        first_name,
        last_name,
        birth_date,
        passport_number
      );
      const response = ResponseModel(
        201,
        result,
        MessageModel.postSucess("passageiro")
      );
      res.status(201).send(response);
    } catch (error) {
      const response = ResponseModel(
        404,
        null,
        MessageModel.postFail("passageiro")
      );
      res.status(404).send(response);
    }
  }

  async putPassenger(req, res) {
    try {
      const { passenger_id } = req.params;
      const { first_name, last_name, birth_date, passport_number } = req.body;
      const result = await PassengerService.putPassenger(
        passenger_id,
        first_name,
        last_name,
        birth_date,
        passport_number
      );
      const response = ResponseModel(
        200,
        result,
        MessageModel.putSucess("passageiro")
      );
      res.status(200).send(response);
    } catch (error) {
      const response = ResponseModel(
        404,
        null,
        MessageModel.putFail("passageiro")
      );
      res.status(404).send(response);
    }
  }

  async deletePassenger(req, res) {
    try {
      const { passenger_id } = req.params;
      const result = await PassengerService.deletePassenger(passenger_id);
      const response = ResponseModel(
        200,
        result,
        MessageModel.deleteSucess("passageiro")
      );
      res.status(200).send(response);
    } catch (error) {
      const response = ResponseModel(
        404,
        null,
        MessageModel.deleteFail("passegeiro")
      );
      res.status(404).send(response);
    }
  }
}

module.exports = new PassengerController();
