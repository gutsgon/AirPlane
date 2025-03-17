const sequelize = require("../database/database");
const FlightResponse = require("../DTO/Response/FlightResponse");

class FlightService {
  async getFlight() {
    const [results] = await sequelize.query("SELECT * FROM flight");
    const response = results.map(FlightResponse.fromModel);
    return response;
  }

  async postFlight(
    flight_number,
    departure_airport,
    arrival_airport,
    departure_time,
    arrival_time,
    aircraft_id
  ) {
    const query = `INSERT into flight(
      flight_number, 
      departure_airport, 
      arrival_airport, 
      departure_time, 
      arrival_time, 
      aircraft_id) VALUES (
      :flight_number, 
      :departure_airport, 
      :arrival_airport, 
      :departure_time, 
      :arrival_time, 
      :aircraft_id) RETURNING *`;
    const [results] = await sequelize.query(query, {
      replacements: {
        flight_number,
        departure_airport,
        arrival_airport,
        departure_time,
        arrival_time,
        aircraft_id,
      },
    });
    return results[0];
  }

  async putFlight(
    flight_id,
    flight_number,
    departure_airport,
    arrival_airport,
    departure_time,
    arrival_time,
    aircraft_id
  ) {
    const query = `
            UPDATE flight SET 
            flight_number = :flight_number, 
            departure_airport = :departure_airport, 
            arrival_airport = :arrival_airport, 
            departure_time = :departure_time, 
            arrival_time = :arrival_time, 
            aircraft_id = aircraft_id 
            WHERE flight_id = :flight_id RETURNING* 
        `;
    const [results] = await sequelize.query(query, {
      replacements: {
        flight_id,
        flight_number,
        departure_airport,
        arrival_airport,
        departure_time,
        arrival_time,
        aircraft_id,
      },
    });

    if (results.length === 0) {
      throw Error("Voo não encontrado!");
    }

    return results[0];
  }

  async deleteFlight(flight_id) {
    const query = "DELETE from flight WHERE flight_id = :flight_id RETURNING *";
    const [results] = await sequelize.query(query, {
      replacements: { flight_id },
    });

    if (results.length === 0) {
      throw Error("Voo não encontrado!");
    }

    return results[0];
  }
}

module.exports = new FlightService();
