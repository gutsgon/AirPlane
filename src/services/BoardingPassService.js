const sequelize = require("../database/database");
const BoardingPassResponse = require("../DTO/Response/BoardingPassResponse");
const BoardingResponse = require("../DTO/Response/BoardingResponse");

class BoardingPassService {
  async getBoarding() {
    const query = `
                SELECT
                    bp.boarding_pass_id AS boarding_pass_id,
                    bp.seat_number AS seat_number,
                    bp.issue_time AS issue_time,
                    p.first_name AS passenger_first_name,
                    p.last_name AS passenger_last_name,
                    p.birth_date AS passenger_birth_date,
                    p.passport_number AS passenger_passport_number,
                    f.flight_number AS flight_number,
                    f.departure_airport AS departure_airport,
                    f.arrival_airport AS arrival_airport,
                    f.departure_time AS departure_time,
                    f.arrival_time AS arrival_time,
                    a.model AS aircraft_model,
                    a.manufacturer AS aircraft_manufacturer,
                    a.capacity AS aircraft_capacity
                FROM
                    boarding_pass bp
                JOIN
                    passenger p ON bp.passenger_id = p.passenger_id
                JOIN
                    flight f ON bp.flight_id = f.flight_id
                JOIN
                    aircraft a ON f.aircraft_id = a.aircraft_id
                ORDER BY
                    bp.boarding_pass_id
            `;
    const [results] = await sequelize.query(query);
    const response = results.map(BoardingResponse.fromModel);
    return response;
  }

  async getBoardingPass() {
    const query = "SELECT * from boarding_pass";
    const [results] = await sequelize.query(query);
    const response = results.map(BoardingPassResponse.fromModel);
    return response;
  }

  async postBoardingPass(seat_number, passenger_id, flight_id, issue_time) {
    const query =
      "INSERT into boarding_pass(seat_number, passenger_id, flight_id, issue_time) VALUES (:model, :manufacturer, :capacity) RETURNING *";
    const [results] = await sequelize.query(query, {
      replacements: { seat_number, passenger_id, flight_id, issue_time },
    });
    return results[0];
  }

  async putBoardingPass(
    boarding_pass_id,
    seat_number,
    passenger_id,
    flight_id,
    issue_time
  ) {
    const query = `
      UPDATE boarding_pass SET 
      seat_number = :seat_number,
      passenger_id = :passenger_id,
      flight_id = :flight_id, 
      issue_time = :issue_time 
      WHERE boarding_pass_id = :boarding_pass_id 
      RETURNING *
      `;
    const [results] = await sequelize.query(query, {
      replacements: {
        boarding_pass_id,
        seat_number,
        passenger_id,
        flight_id,
        issue_time,
      },
    });

    if (results.length === 0) {
      throw Error("Cartão de embarque não encontrado!");
    }

    return results[0];
  }

  async deleteBoardingPass(boarding_pass_id) {
    const query =
      "DELETE from boarding_pass WHERE boarding_pass_id = :boarding_pass_id RETURNING *";
    const [results] = await sequelize.query(query, {
      replacements: { boarding_pass_id },
    });

    if (results.length === 0) {
      throw Error("Cartão de embarque não encontrado!");
    }

    return results[0];
  }
}

module.exports = new BoardingPassService();
