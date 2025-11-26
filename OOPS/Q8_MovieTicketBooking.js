class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function() {
  return `
    ========== MOVIE TICKET ==========
    Movie: ${this.movieName}
    Seat: ${this.seatNo}
    Price: ₹${this.price}
    ==================================`;
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

// Test
const ticket1 = new OnlineTicket('Avengers', 'A5', 300, 50);
const ticket2 = new OnlineTicket('Avatar', 'B12', 400, 75);

console.log(ticket1.printTicket());
console.log(`Convenience Fee: ₹${ticket1.convenienceFee}`);
console.log(`Total Amount: ₹${ticket1.getTotalAmount()}`);

console.log(ticket2.printTicket());
console.log(`Convenience Fee: ₹${ticket2.convenienceFee}`);
console.log(`Total Amount: ₹${ticket2.getTotalAmount()}`);

console.log('\nPrototype Chain: OnlineTicket → MovieTicket → Object');
