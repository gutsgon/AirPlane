const sequelize = require("../database/database");
const PassengerResponse = require("../DTO/Response/PassengerResponse");

class PassengerService {
  async getPassenger() {
    const [results] = await sequelize.query("SELECT * FROM passenger");
    const response = results.map(PassengerResponse.fromModel);
    return response;
  }

  async postPassenger(first_name, last_name, birth_date, passport_number) {
    const query = `
            INSERT into passenger(first_name, last_name, birth_date, passport_number) 
            VALUES (:first_name, :last_name, :birth_date, :passport_number) 
            RETURNING *
        `;
    const [results] = await sequelize.query(query, {
      replacements: { first_name, last_name, birth_date, passport_number },
    });
    return results;
  }

  async putPassenger(
    passenger_id,
    first_name,
    last_name,
    birth_date,
    passport_number
  ) {
    const query = `
        UPDATE passenger SET
        first_name = :first_name, 
        last_name = :last_name, 
        birth_date = :birth_date, 
        passport_number = :passport_number 
        WHERE passenger_id = :passenger_id RETURNING *
      `;
    const [results] = await sequelize.query(query, {
      replacements: {
        passenger_id,
        first_name,
        last_name,
        birth_date,
        passport_number,
      },
    });

    if (results.length === 0) {
      throw Error("Passageiro(a) não encontrado(a)!");
    }
    return results;
  }

  async deletePassenger(passenger_id) {
    const query =
      "DELETE FROM passenger WHERE passenger_id = :passenger_id RETURNING *";
    const [results] = await sequelize.query(query, {
      replacements: { passenger_id },
    });

    if (results.length === 0) {
      throw Error("Passageiro(a) não encontrado(a)!");
    }
    return results;
  }
}

module.exports = new PassengerService();
