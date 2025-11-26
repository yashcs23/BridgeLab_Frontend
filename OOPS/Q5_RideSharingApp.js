class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle, vehicleNumber) {
    super(name, rating);
    this.vehicle = vehicle;
    this.vehicleNumber = vehicleNumber;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    try {
      if (!this.distance || this.distance < 0) {
        throw new Error('Invalid distance: Distance must be provided and non-negative');
      }
      const baseFare = 50;
      const perKmFare = 15;
      return baseFare + (this.distance * perKmFare);
    } catch (error) {
      console.error(`Fare Calculation Error: ${error.message}`);
      return null;
    }
  }
}

// Test
const driver1 = new Driver('Raj', 4.8, 'Sedan', 'MH-01-AB-1234');
const trip1 = new Trip('Mumbai', 'Pune', 150);
const trip2 = new Trip('Delhi', 'Noida', -5);

console.log(`Trip 1 fare: ₹${trip1.calculateFare()}`);
console.log(`Trip 2 fare:`, trip2.calculateFare());
