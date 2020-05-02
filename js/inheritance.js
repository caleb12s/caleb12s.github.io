(function(){
    "use strict";

    String.prototype.filter = function(word){
        let input = this.split(" ");
    
        return input.filter(a => a !== word ).join(" ");
    
    }
    
    console.log("This house is not nice!".filter('not'));
    
    Array.prototype.bubbleSort = function(){
        for(var i = 0; i < this.length; i++) {
            for(var j = 1; j < this.length; j++) {
              if(this[j - 1] > this[j]) {
                  let temp = this[j-1];
                  this[j-1] = this[j];
                  this[j] = temp;
              }
            }
          }
          return this;
    };
    
    // console.log([6,4,0,3,-2,1].bubbleSort());
    
    var Person = function() {};
    Person.prototype.initialize = function(name, age) {
        this.name = name; this.age = age;
    }
    Person.prototype.describe = function() {
        return this.name + ", " + this.age + " years old."; 
    }
    var Student = function() {}; 
    Student.prototype = new Person();
    Student.prototype.learn = function(subject){
        let retVal = this.name + " just learned " + subject;
        console.log(retVal);
        return retVal;
    }
    var me = new Student();
    me.initialize("John", 25); 


    let Teacher = function() {};
    Teacher.prototype = new Person();
    Teacher.prototype.teach = function(subject){
        // console.log(this.name + " is now teaching a "+ subject)
        let retVal = this.name + " is now teaching a "+ subject;
        console.log(retVal);
        return retVal;
    }
    let Levi = new Teacher();
    Levi.initialize("Levi", 45);
    console.log(Levi.teach("WAP"));

    describe("JS Practice", function() {
        it("Filter function input is: This house is not nice! and expected is This house is nice!", () => {
            assert.equal("This house is not nice!".filter('not'), "This house is nice!");
        });
        it("Sort function input is: [6,4,0,3,-2,1] and expected is [-2, 0, 1, 3, 4, 6]", () => {
            assert.deepEqual([6,4,0,3,-2,1].bubbleSort(), [-2, 0, 1, 3, 4, 6]);
        });
        it("Levi is teaching a WAP ", () => {
            assert.equal(Levi.teach("WAP"),"Levi is now teaching a WAP");
        });

        it("John just learned Inheritance ", () => {
            assert.equal(me.learn("Inheritance"),"John just learned Inheritance");
        });
    });
})();


