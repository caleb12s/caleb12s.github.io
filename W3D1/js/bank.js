class Bank{

    constructor(){
        this.accounts = [];
   
    }

    addAccount(){
        this.accounts.push(new Account(987001));
    }

    addSavingsAccount(interest, amount){
        let account  = new SavingAccount(987002);
        // console.log(account.getNumber());
        account.deposit(amount);
        // account.getBalance();
        account.interest = interest;
        this.accounts.push(account);
        return account;
    }

    addCheckingAccount(overdraft){
        let account  = new CheckingAccount(987003);
        account.overdraft = overdraft;
        this.accounts.push(account);
    }

    closeAccount(number){
        let remNum = 0;
        for(let i = 0; i < this.accounts.length; i++){
                if(this.accounts[i].getNumber() == number){
                    remNum = number;
                }
        }
        this.accounts = this.accounts.filter(a => a.getNumber() != remNum);
    }

    accountReport(){
        return this.accounts.map(a => a.getNumber());
    }

    endOfMonth(){
        let retVal = [];
        for(let i = 0; i < this.accounts.length; i++){
             retVal.push(this.accounts[i].endOfMonth());
        }
        return retVal;
    }

}
