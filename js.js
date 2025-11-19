class BankCard{
    constructor(owner, balance=0, experince){
    this.owner = owner
    this.balance = balance
    this.experince = experince
    }
    toString(){
        return "bank card by"+ this.owner;11
    }
    addToBalance(money){
        return this.balance += money;
    }
    showBalance(){
        return this.balance
    }
    widthdraw(money){
        return this.balance -= money;
    }
}

const card = new BankCard('qwe123',0, 2025)
console.log(card);

console.log(card.showBalance());
card.addToBalance(1000);
card.widthdraw(500)
console.log(card.showBalance());