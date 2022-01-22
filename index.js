class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  get commit() {
    this.time = new Date();
    if (t1.constructor.name === "Withdrawal" && this.amount > this.account.balance) {
      console.log("Withdrawal exceeds account Balance")
      this.amount = 0;
      return;
    } else {
      this.account.addTransaction(this.value);
    }

    }
}

class Withdrawal extends Transaction {
get value () {
  return -this.amount;
}
}

class Deposit extends Transaction{
  get value () {
    return this.amount;
  }
}



class Account {
  constructor(balance) {
    this.balance = balance;
    this.transactions = [];
  }
  get calcBalance() {
    let transactionBalance = this.balance;
    for (let i = 0; i < this.transactions.length; i++) {
      transactionBalance += this.transactions[i];
    }
    this.transactions = [];
    this.balance = transactionBalance;
    return this.balance;
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

//  what we are trying to acheive:
//1. allow mutliple acounts to be created
//2. each account can have many transactions
//3. allow withdrawals and depositions into accounts
//4. allow us to see transaction history
//5. allow us to retreive the current balance of the account at any time
//6. dont allow withdrawals larger than the balance of the account

const bensAccount = new Account(125);

const t1 = new Withdrawal(126, bensAccount);
t1.commit;

console.log("step 3. this is bens account balance after the t1 has been commited: ", bensAccount.calcBalance);
console.log("step 4. this is the transaction after it has been commiteed: ", t1);

const t2 = new Withdrawal(25, bensAccount);
t2.commit;

console.log("step 5. this is bens account after t2 has been commited: ", bensAccount);
console.log("these are bensAccounts transactions: ", bensAccount.transactions);

// const t3 = new Deposit(182, bensAccount);
// t3.commit;
// console.log("these are bensAccounts transactions after t3 has been commited: ", bensAccount.transactions);
// console.log("these are bensAccounts transactions after t3 has been commited a SECOND time: ", bensAccount.transactions);
// bensAccount.calcBalance;
// console.log("this is bensAccount Balance after calculation:", bensAccount.balance);

