class CheckingAccount extends  Account{
   
    constructor(number){
        // number = Math.floor(100000 + Math.random() * 900000);
        super(number);
        this._overdraft = 0;
    }

    set overdraft(overdraft){
        this._overdraft = overdraft;
    }

    get overdraft(){
        return this._overdraft;
    }

    withdraw(amount){
     
        if(Math.abs(super.getBalance - amount) >= this.overdraft ){
            super.withdraw(amount);
        }

    }

    toString(){
        return "Account " + super.getNumber + ": balance " + super.getBalance + "Over draft limit"+ this._overdraft;
    }

    endOfMonth(){

        if(this.getBalance() <= 0){
            return "Warning, low balance Checking account "+ super.getNumber() + ": balance " + super.getBalance() + ": Over draft limit " + this._overdraft;
        }else {
            return "Checking account " + super.getNumber() + ": balance " + super.getBalance() + " Over draft limit "+ this._overdraft;
        }
    }
 
}