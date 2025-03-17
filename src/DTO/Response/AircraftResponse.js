class AircraftResponse {
  constructor({ aircraft_id, model, manufacturer, capacity }) {
    this.aircraft_id = aircraft_id;
    (this.model = model), (this.manufacturer = manufacturer);
    this.capacity = capacity;
  }

  static fromModel(obj) {
    return {
      model: obj.model,
      manufacturer: obj.manufacturer,
      capacity: obj.capacity,
    };
  }
}

module.exports = AircraftResponse;
