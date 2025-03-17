class PassengerResponse {
    constructor({ passenger_id, first_name, last_name, birth_date, passport_number }) {
      this.passenger_id = passenger_id;
      this.first_name = first_name; 
      this.last_name = last_name;
      this.birth_date = birth_date;
      this.passport_number = passport_number;
    }
  
    static fromModel(obj) {
      return {
        first_name: obj.first_name,
        last_name: obj.last_name,
        birth_date: obj.birth_date,
        passport_number: obj.passport_number,
      };
    }
  }
  
  module.exports = PassengerResponse;
  