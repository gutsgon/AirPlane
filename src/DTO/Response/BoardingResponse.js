class BoardingResponse {
  constructor({
    boarding_pass_id,
    seat_number,
    issue_time,
    passenger_first_name,
    passenger_last_name,
    passenger_birth_date,
    passenger_passport_number,
    flight_number,
    departure_airport,
    arrival_airport,
    departure_time,
    arrival_time,
    aircraft_model,
    aircraft_manufacturer,
    aircraft_capacity,
  }) {
    this.boarding_pass_id = boarding_pass_id;
    this.seat_number = seat_number;
    this.issue_time = issue_time;
    this.passenger_first_name = passenger_first_name;
    this.passenger_last_name = passenger_last_name;
    this.passenger_birth_date = passenger_birth_date;
    this.passenger_passport_number = passenger_passport_number;
    this.flight_number = flight_number;
    this.departure_airport = departure_airport;
    this.arrival_airport = arrival_airport;
    this.departure_time = departure_time;
    this.arrival_time = arrival_time;
    this.aircraft_model = aircraft_model;
    this.aircraft_manufacturer = aircraft_manufacturer;
    this.aircraft_capacity = aircraft_capacity;
  }

  static fromModel(obj) {
    return {
      boarding_pass_id: obj.boarding_pass_id,
      seat_number: obj.seat_number,
      issue_time: obj.issue_time,
      passenger_first_name: obj.passenger_first_name,
      passenger_last_name: obj.passenger_last_name,
      passenger_birth_date: obj.passenger_birth_date,
      passenger_passport_number: obj.passenger_passport_number,
      flight_number: obj.flight_number,
      departure_airport: obj.departure_airport,
      arrival_airport: obj.arrival_airport,
      departure_time: obj.departure_time,
      arrival_time: obj.arrival_time,
      aircraft_model: obj.aircraft_model,
      aircraft_manufacturer: obj.aircraft_manufacturer,
      aircraft_capacity: obj.aircraft_capacity,
    };
  }
}

module.exports = BoardingResponse;
