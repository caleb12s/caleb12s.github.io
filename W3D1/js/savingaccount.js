// import Account from './account';

class SavingAccount extends Account{

        get interest(){
            return this._interest;
        }

        set interest(interest){
            this._interest = interest;
        }

        constructor(number){
        //    number = Math.floor(100000 + Math.random() * 900000);
           super(number);
           this._interest = 1;
        }

        addInterest(){
            // console.log(this.interest+"<-"+super.getBalance()+"<-"+super.getNumber());
            // console.log((this.interest/100)*super.getBalance()+" "+this.interest);
            super.deposit((this.interest/100)*super.getBalance());
        }

        toString(){
            return "Account " + super.getNumber() + ": balance " + super.getBalance() + ": interest" + this._interest;
        }

        endOfMonth(){
            this.addInterest();
            return "Saving account " + super.getNumber() + ": balance " + super.getBalance() + ": interest" + this._interest;
        }


    

}