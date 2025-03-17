const MessageModel = require("../models/MessageModel");
const ResponseModel = require("../models/ResponseModel");
const BoardingPassService = require("../services/BoardingPassService");

class BoardingPassController {
  async getBoarding(req, res) {
    try {
      const result = await BoardingPassService.getBoarding();
      const response = ResponseModel(
        200,
        result,
        MessageModel.getSucess("embarque")
      );
      res.status(200).send(response);
    } catch (error) {
      console.log(error);

      const response = ResponseModel(
        404,
        null,
        MessageModel.getFail("embarque")
      );
      res.status(404).send(response);
    }
  }

  async getBoardingPass(req, res) {
    try {
      const result = await BoardingPassService.getBoardingPass();
      const response = ResponseModel(
        200,
        result,
        MessageModel.getSucess("cartão de embarque")
      );
      res.status(200).send(response);
    } catch (error) {
      const response = ResponseModel(
        404,
        null,
        MessageModel.getFail("cartão de embarque")
      );
      res.status(404).send(response);
    }
  }

  async postBoardingPass(req, res) {
    try {
      const { seat_number, passenger_id, flight_id, issue_time } = req.body;
      const result = await BoardingPassService.postBoardingPass(
        seat_number,
        passenger_id,
        flight_id,
        issue_time
      );
      const response = ResponseModel(
        200,
        result,
        MessageModel.postSucess("cartão de embarque")
      );
      res.status(200).send(response);
    } catch (error) {
      const response = ResponseModel(
        404,
        null,
        MessageModel.postFail("cartão de embarque")
      );
      res.status(404).send(response);
    }
  }

  async putBoardingPass(req, res) {
    try {
      const { boarding_pass_id } = req.params;
      const { seat_number, passenger_id, flight_id, issue_time } = req.body;
      const result = await BoardingPassService.putBoardingPass(
        boarding_pass_id,
        seat_number,
        passenger_id,
        flight_id,
        issue_time
      );
      const response = ResponseModel(
        200,
        result,
        MessageModel.putSucess("cartão de embarque")
      );
      res.status(200).send(response);
    } catch (error) {
      const response = ResponseModel(
        404,
        null,
        MessageModel.putFail("cartão de embarque")
      );
      res.status(404).send(response);
    }
  }

  async deleteBoardingPass(req, res) {
    try {
      const { boarding_pass_id } = req.params;
      const result = await BoardingPassService.deleteBoardingPass(
        boarding_pass_id
      );
      const response = ResponseModel(
        200,
        result,
        MessageModel.deleteSucess("cartão de embarque")
      );
      res.status(200).send(response);
    } catch (error) {
      const response = ResponseModel(
        404,
        null,
        MessageModel.deleteFail("cartão de embarque")
      );
      res.status(404).send(response);
    }
  }
}

module.exports = new BoardingPassController();
