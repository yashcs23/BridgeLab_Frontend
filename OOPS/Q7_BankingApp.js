class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.error('Deposit failed: Amount must be positive');
      return false;
    }
    this.#balance += amount;
    console.log(`Deposited: ₹${amount}. New balance: ₹${this.#balance}`);
    return true;
  }

  withdraw(amount) {
    try {
      if (amount <= 0) {
        throw new Error('Withdrawal amount must be positive');
      }
      if (amount > this.#balance) {
        throw new Error(`Insufficient balance. Available: ₹${this.#balance}`);
      }
      this.#balance -= amount;
      console.log(`Withdrawn: ₹${amount}. Remaining balance: ₹${this.#balance}`);
      return true;
    } catch (error) {
      console.error(`Withdrawal failed: ${error.message}`);
      return false;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

// Test
const account = new BankAccount(10000);
console.log('Initial Balance: ₹' + account.getBalance());

account.deposit(5000);
account.withdraw(3000);
account.withdraw(15000); // Error
account.withdraw(2000);

console.log('Final Balance: ₹' + account.getBalance());
