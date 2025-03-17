class BoardingPassResponse {
    constructor({ boarding_pass_id, seat_number, passenger_id, flight_id, issue_time }) {
      this.boarding_pass_id = boarding_pass_id;
      this.seat_number = seat_number; 
      this.passenger_id = passenger_id;
      this.flight_id = flight_id;
      this.issue_time = issue_time;
    }
  
    static fromModel(obj) {
      return {
        seat_number: obj.seat_number,
        passenger_id: obj.passenger_id,
        flight_id: obj.flight_id,
        issue_time: obj.issue_time,
      };
    }
  }
  
  module.exports = BoardingPassResponse;
  