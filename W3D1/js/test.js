

(function(){
    "use strict";

// Testing Account class
    
    
        describe("Account", function() {
        
    
        let account = new Account(610703);
        
        it("Account number expected is 610703", () => {
            assert.deepEqual(account.getNumber(), 610703);
        });
        account.deposit(8000);
        it("Account balance must be 8000$ after deposit 8000$", () => {
            assert.equal(account.getBalance(), 8000.0);
        });
        // account.withdraw(2000.0);
        // it("Account balance must be 6000$ after deposit 2000$", () => {
        //     assert.equal(account.getBalance(), 6000.0);
        // }); 
        it("Checking to String", () => {
            assert.deepEqual(account.toString(), "Account 610703: balance 8000");
           
        }); 


    });

    describe("Saving Account", function(){

        let savingAccount = new SavingAccount(610703,1);
        
        it("Saving Account number expected is 610703", () => {
            assert.deepEqual(savingAccount.getNumber(), 610703);
        });
        savingAccount.interest = 1;
        it("Saving Account interest is 1% ", () => {
            assert.deepEqual(savingAccount.interest, 1);
        });
        savingAccount.deposit(30000);
        it("Saving Account deposit after 30000$ ", () => {
            assert.deepEqual(savingAccount.getBalance(), 30000);
        });

        let savingAccount2 = new SavingAccount(610703,1);
        savingAccount2.deposit(30000);
        savingAccount2.addInterest();
        it("Saving Account after add interest ", () => {
            assert.equal(savingAccount2._balance, 30300);
        });
    });

    describe("Checking Account", function(){
        let checkingAccount = new CheckingAccount(610703);

        it("Checking Account number expected is 610703", () => {
            assert.deepEqual(checkingAccount.getNumber(), 610703);
        });

        checkingAccount.deposit(200000);
        checkingAccount.overdraft = 2000;
        checkingAccount.withdraw(202000);

        it("Checking Account is balance after -2000", () => {
            assert.deepEqual(checkingAccount.getBalance(), 200000);
        });

        });

    describe("Bank test", function(){
        let bank = new Bank();
        bank.addAccount();
        bank.addCheckingAccount();
        bank.addSavingsAccount();
        bank.addAccount();

        it("Account list", () => {
            assert.deepEqual(bank.accountReport(), [ 987001, 987003, 987002, 987001 ]);
        });

        let bankA = new Bank();
        bankA.addAccount();
        bankA.addCheckingAccount();
        bankA.addSavingsAccount();
        bankA.addAccount();
        bankA.closeAccount(987002)
        it("Account 987002 is removed ", () => {
            assert.deepEqual(bankA.accountReport(), [ 987001, 987003, 987001 ]);
        });

    });

    describe("End of month", function(){
        let bankB = new Bank();
        bankB.addAccount();
        bankB.addCheckingAccount();
        // console.log(bankB.addSavingsAccount(2, 5000).getBalance());
        bankB.addAccount();
        

        let expected = ["", "Warning, low balance Checking account 987003: balance 0: Over draft limit undefined", ""];
        let expected2 = ["",""];
        console.log(bankB.endOfMonth()); 
        it("Account list", () => {
            assert.deepEqual(bankB.endOfMonth(), expected);
        });

    });

})();