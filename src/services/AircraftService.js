const sequelize = require("../database/database");
const AircraftResponse = require("../DTO/Response/AircraftResponse");

class AircraftService {
  async getAircraft() {
    const [results] = await sequelize.query("SELECT * FROM aircraft");
    const response = results.map(AircraftResponse.fromModel);
    return response;
  }

  async postAircraft(model, manufacturer, capacity) {
    const query = `
                INSERT INTO aircraft (model, manufacturer, capacity)
                VALUES (:model, :manufacturer, :capacity)
                RETURNING *`;
    const [results] = await sequelize.query(query, {
      replacements: { model, manufacturer, capacity },
    });

    return results[0];
  }

  async putAircraft(aircraft_id, model, manufacturer, capacity) {
    const query = `
                UPDATE aircraft
                SET model = :model, manufacturer = :manufacturer, capacity = :capacity
                WHERE aircraft_id = :aircraft_id
                RETURNING *`;
    const [results] = await sequelize.query(query, {
      replacements: { aircraft_id, model, manufacturer, capacity },
    });

    if (results.length === 0) {
      throw Error("Avião não encontrado para atualização!");
    }

    return results[0];
  }

  async deleteAircraft(aircraftId) {
    const query = `DELETE FROM aircraft WHERE aircraft_id = :aircraftId RETURNING *`;
    const [results] = await sequelize.query(query, {
      replacements: { aircraftId },
    });

    if (results.length === 0) {
      throw Error("Avião não encontrado para exclusão!");
    }
    return results[0];
  }
}

module.exports = new AircraftService();
