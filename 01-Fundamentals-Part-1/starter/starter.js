// let firstName = 'Jonas';
// let age = 23;

// console.log(firstName + " is " + age + " years old.");

// firstName = 'Mathew';

// console.log(firstName + " is " + age + " years old.");

// Lecture 1 & 2 .....

let country = 'United States';
let continent = 'North America';
let population = 250;

console.log(country);
console.log(continent);
console.log(population);

// Lecture Data Types 

let isIsland = false;
let language = 'English';

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof language);
console.log(typeof population);

// Lecture let, const and var

language = "english";

class Account {

    constructor(balance) {
        this.balance = balance;
        console.log(`${this.balance} is the initial balance.`);
    }


    debit(amount) {
        if (this.balance < amount) {
            console.log(`${amount} debited`);
            console.log('Insuficient Funds');
            this.balance = 0;
        } else {
            console.log(`${amount} debited`);
            this.balance -= amount;
            console.log(`The new balance is ${this.balance}`);
        }
    }

    credit(amount) {
        console.log(`${amount} credited`);
        this.balance += amount;
        console.log(`The new balance is ${this.balance}`);
    }

    getBalance() {
        console.log(`${this.balance} is the current balance.`);
        return this.balance;
    }






}

let checking = new Account(20000);

checking.debit(500);
checking.credit(5000);
checking.getBalance();
checking.credit(2200);
checking.debit(50000);
checking.getBalance();