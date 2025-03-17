class FlightResponse {
    constructor({ flight_id, flight_number, departure_airport, arrival_airport, departure_time, arrival_time, aircraft_id }) {
      this.flight_id = flight_id;
      this.flight_number = flight_number; 
      this.departure_airport = departure_airport;
      this.arrival_airport = arrival_airport;
      this.departure_time = departure_time;
      this.arrival_time = arrival_time;
      this.aircraft_id = aircraft_id;
    }
  
    static fromModel(obj) {
      return {
        flight_number: obj.flight_number,
        departure_airport: obj.departure_airport,
        arrival_airport: obj.arrival_airport,
        departure_time: obj.departure_time,
        arrival_time: obj.arrival_time,
        aircraft_id: obj.aircraft_id,
      };
    }
  }
  
  module.exports = FlightResponse;
  