const clss = {
    fname : ["James", "Jose","Sarah"],
    lname : ["Bond", "Peace", "War"],
    age : [24, 16, 18],

    // arr : function (){
    //     x [a,b,c] = this.fname
    //     console.log(this.clss[a]);
    // }

    
    fullName : function (){
        console.log(`First Name: ${this.fname}`);
        console.log(`Last Name: ${this.lname}`);
        console.log(`Age: ${this.age}`);
        console.log(`My name is ${this.fname} ${this.lname} and I am ${this.age} years old`);
    }
}
clss.fullName()