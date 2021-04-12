    //DATE OBJ
        // const now = new Date(2018,9,13,15,5)
        // console.log(now)



        //MAP AND WEAKMAP


        // const roles = new Map()
        // var t1 = {t1:'user'}
        // var t2 = {t2:'admin'}
        // roles.set(t1,'user')
        // roles.set(t2,'admin')
        // console.log(roles)



        //SET AND WEAKSET

        // const roles = new Set()

        // roles.add("User1")
        // roles.add("User2")

        // console.log(roles)


        //STRINGS

        // const str = "He said \"Hello Good Morning\""

        // console.log(str)

        // let temp = 20.5
        // let strcat = `Weather of India is ${temp} \u00b0c`
        // console.log(strcat)

        // let result = 5 * '5'; //25
        // let result2 = 5 + '5'; //55
        // console.log(result, result2)




        //CONTROL STATEMENT

        /*let time = 9;

        if(time<12){
            console.log('Good Morning')
            if(time === 10){
                console.log("Its time to take break fast")
            }
        }else{
            console.log("Good after noon")
        }*/





        //SWITCH STATEMENTS 

        /*let expression = "Javascript"
        switch (expression) {
            case "Javascript":
                console.log("You have selected JavaScript")
                break;
        
            case "php":
                console.log("You have selected PHP")
                break;
            
            case "Python":
                console.log("You have selected Python")    
                break;

            default:
                console.log("Please select something")
                break;
        }*/



        //LOOPS
        //WHILE LOOP
        /*let count = 0;

        while(count<10){
            console.log(count++)
        }*/

        //Do while loop
        /*let count = 0
        do {
            console.log("Count Value "+count)
            count++
        } while (count < 5);*/

        //FOR LOOP
        //1. initialize
        //2. evaluate expression
        //3.execute statement
        //4.execute the increment or decrement operators

       /*for(i=0,j=5;i<5;i++,j--){
           console.log(i + " and "+j)
       } */


       /*for(let i=0;i<4;i++){
           for(let j=0;j<4;j++){
               console.log("i: "+i+", j: "+j)
           }
           console.log("\n")
       }*/
       
       //FOR IN LOOP

       /*const obj = {
           a:1,
           b:2,
           c:3,
           d:4
       }

       for(let o in obj){
           console.log(o+" = "+obj[o])
       }*/



       //let arr = [1,2,3,4,5] // declare array

       /*for(let value in arr){
           console.log(value) // prints the index of the array
       }*/

       /*for (let value of arr){
           console.log(value) // prints the elements in the array
       }*/

       /*
       difference btw in for..in and for.. of loop

       for.. in loop: 
        loop over enumerable properties
       
       for... of loop:
        does use iterable objects and loop over generated values

       */

    //OPERATORS

   /* //Addition
    console.log(14+20)

    //subraction
    console.log(20-14)

    //divison
    console.log(3/5) //quotient

    //multiply
    console.log(3*2)

    //remainder
    console.log(10%3) //remainder */


    //destructing operator
    /*const obj = {a:1,b:2,c:3,d:4}

    const {a,b,c,d} = obj

    console.log(a)*/



    //operator precedence table

    /*x = 88 / 4 * (2 + 3)
    // 88 / 4 * 5
    // 22 * 5
    //110
    console.log(x)*/

    // in operator

    // const color = { blue: "blue color", yellow: "Yellow color" }
    // console.log("blue" in color)


    // let a = 1

    // label: while(a==1){
    //     console.log(a)
    //     break label
    // }

    // const obj = {
    //     name: "Jay",
    //     greetings: function(){
    //         return "Hey Good Afternoon"
    //     }
    // }

    // const obj = {
    //     name: "Jay",
    //     greetings(){
    //         return "Hey Good Afternoon"
    //     }
    // }

    // console.log(obj.greetings())

    //Arrow Functions

    // const greeting = greeting=> "Hello"

    // console.log(greeting())

    // const obj = {
    //     name:"Jay",
    //     greetings(){
    //         return "Hello "+ this.name
    //     }
    // }

    // console.log(obj.greetings())

    // const m = obj.magic

    // console.log(m === obj.magic)

    // console.log(m)

    // let closure;
    // {
    //     let block = "character"

    //     closure = function(){
    //         console.log(block)
    //     }
    // }
    
    // closure()





    //splice()

    // array = [1,2,3,4,5]

    // // array.splice(1,0,0,0) //output 1,0,0,2,3,4,5

    // // array.splice(1) //output 1

    // // array.splice(0,2)// output 1,4,5

    // // array.splice(1,0,2,3,4)

    // console.log(array)

    


    //COPY WITHIN ARRAY

    // array = [1,2,3,4,5]
    // array.copyWithin(0,2,4) //3,4,5,4,5
    // console.log(array)


    //Fill method

    // array = [1,2,3,4,5]
    // //array.fill("Jay")// prints ["Jay", "Jay", "Jay", "Jay", "Jay"]
    // // array.fill("Jay",3) // [1, 2, 3, "Jay", "Jay"]
    // // array.fill("Jay",1,2) // 1, "Jay", 3, 4, 5]
    // console.log(array)




    //map function

    // const obj = {
    //     name: "Jayanth",
    //     age: 22,
    //     gender: "male"
    // }

    // // Object.keys(obj).map((values)=>{
    // //     console.log(obj[values]) // Jayanth , 22 , male
    // // })

    // console.log(Object.keys(obj)) //"name", "age", "gender"


    //    const users = [
    //        {
    //         name: "Jayanth",
    //         age: 22
    //        },
    //        {
    //            name: "Nik",
    //            age: 20
    //        }
    //    ]

    //    const names = users.map(x=>x.name)
    //    const ages = users.map(x=>x.age)

    //    console.log(names)
    //    console.log(ages)

    //class and objects prototypes

    // class Car{
    //     constructor(name, model){
    //         this.name = name
    //         this.model = model
    //     }

    //     display(){
    //         console.log(`name: ${this.name} and model: ${this.model} and ${this.price}`)
    //     }
    // }

    // Car.prototype.price = "1cr"
    // const car1 = new Car("BMW", "x5")
    // const car2 = new Car("Benz","AMG")

    // car1.display()
    // car2.display()

    // console.log(Car)


    // class Static{
    //     constructor(){
    //         console.log(Static.staticMethod())
    //     }

    //     static staticMethod(){
    //         return `Static Method`
    //     }

    // }

    // const st = new Static()
    // // st.staticMethod()





    //Map Object

    // const mp = new Map()
    
    // let name = "Nik",
    // obj = {},
    // fun = function(){}

    // mp.set(name,"Jayanth")
    // mp.set(obj = "objectValue")
    // mp.set(fun, "functionValue")

    // console.log(mp)





    //SET 

    // const st = new Set()

    // st.add(1)
    // st.add({1:"one", 2:"Two"})
    // console.log(st)

    // st.delete(1)
    // console.log(st)

    

    //flags in regex

    // i = case sensitive words
    // g = global search
    // m = multiline search 
    // u = unicode 
    // p = sticky search




    // let a=function(){
    //     console.log("hello")
    // }
    // const obj=new a();
    // console.log(typeof a)
    // console.log(typeof obj)

    