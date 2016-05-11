///<reference path="~/Scripts/MDN/MDN.Common.js" />

//prototype
var Person = function(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

var john = new Person("John");
jslog.info("john.getName() : "+john.getName());

Person.prototype.sayMyName = function () {
    return 'hello, my name is ' + this.name;
}
jslog.info("john.sayMyName() : " + john.sayMyName());
john.sayMyName();

jslog.info(Array(40).join("-")+"prototype");

var Customer = function (name) {
    this.name = name;
};
Customer.prototype = new Person();
Customer.prototype.sayMyCompanyName = function () {
    return 'my company name is ' + this.name;
}

var myCustomer = new Customer('Dream Inc.');
jslog.info("myCustomer.sayMyName() : " + myCustomer.sayMyName());
jslog.info("myCustomer.sayMyCompanyName() : " + myCustomer.sayMyCompanyName());


Customer.prototype.setAmountDue = function (amountDue) {
    this.amountDue = amountDue;
};
Customer.prototype.getAmountDue = function () {
    return this.amountDue;
};
myCustomer.setAmountDue(2000);
jslog.info(myCustomer.getAmountDue());

Customer.prototype.sayMyName = function (name) {
    return "changed method, new sayMyName(): my name is " + name;
}

jslog.info("override sayMyName method : " + john.sayMyName());
jslog.info("override sayMyName method : " + myCustomer.sayMyName("worldpay"));

jslog.info(Array(40).join("-") + "override and inheritance");
//override and inheritance
var FamilyMember = function (name) {
    this.name = name;
    this.signature = function () {
        jslog.info("family member " + this.name + " signature: " + this.name.toUpperCase());
    }
}

FamilyMember.prototype.discuss = function () {
    jslog.info("family member: "+this.name+" discuss garden!");
}

FamilyMember.prototype.hiking = function () {
    jslog.info("family member: " + this.name + " go hiking!");
}


var zhang = new FamilyMember("zhang");
zhang.signature();
zhang.discuss();
zhang.hiking();

var Parent = function (name,type) {
    FamilyMember.call(this,name);
    this.type = type;
    this.signature = function () {
        jslog.info("family member " + this.name + " signature: your " + this.type.toUpperCase());
    }
}
Parent.prototype = new FamilyMember();
Parent.prototype.discuss = function (topic) {
    if (topic === undefined) {
        this.discuss();
    } else {
        jslog.info(this.type + " discuss " + topic);
    }
}

var zhang = new FamilyMember("zhang");
zhang.signature();
zhang.discuss();
zhang.hiking();

var wang = new Parent("wang", "mother");
wang.signature();
wang.discuss("cooking");
wang.hiking();

//inheritance
var Young = function (name) {
    this.name = name;
    this.privateMethod = function () {
        jslog.info("here is "+this.name+"'s private method");
    }
}

Young.prototype.sayName = function () {
    jslog.info("here is young, my name is " + this.name);
}

var zhao = new Young("zhao");
zhao.sayName();
zhao.privateMethod();

var Student = function (name,subject) {
    Young.call(this, name);
    this.subject = subject;
    this.privateMethod = function (methodName) {
        jslog.info("here is student " + this.name + "'s private method:"+methodName);
    }
}
Student.prototype = Object.create(Young.prototype);
Student.prototype.sayName = function (nickname) {
    jslog.info("here is student, my nickname is " + nickname + ", study in " + this.subject);
}

var student1 = new Student("qian", "Computer");
student1.sayName("$$$");
student1.privateMethod("some app");
zhao.sayName();

Young.prototype.newMethod = function() {
    jslog.info("here is new method in Young.");
}

zhao.newMethod();
student1.newMethod();

Student.prototype.newMethod = function () {
    jslog.info("here is new method in Student.");
}
zhao.newMethod();
student1.newMethod();

//bind
jslog.info(Array(40).join("-") + "bind");


var altInfo = jslog.info;
//altInfo("hello");
altInfo.call(jslog, "hello");
altInfo.bind(jslog)("hello bind");

/*The simplest use of bind() is to make a function that, 
no matter how it is called, is called with a particular this value.
A common mistake for new JavaScript programmers is to extract a method from an object,
then to later call that function and expect it to use the original object as its this 
(e.g. by using that method in callback-based code). 
Without special care, however, the original object is usually lost. 
Creating a bound function from the function, using the original object, neatly solves this problem:
*/
this.x = 9;
var module = {
    x: 81,
    getX: function() {
        return this.x;
    }
};

var testData = {
    x:83,
    getY: function () {
        return this.x;
    }
};

jslog.info("x: "+x);
jslog.info("module.getX(): " + module.getX());


var retrieveX = module.getX;
jslog.info("retrieveX(): " + retrieveX());

var boundGetX = retrieveX.bind(testData);
jslog.info("testData.getY(): " + testData.getY());
jslog.info("boundGetX(): " + boundGetX());

/*
The next simplest use of bind() is to make a function with pre-specified initial arguments. 
These arguments (if any) follow the provided this value and are then inserted 
    at the start of the arguments passed to the target function, 
followed by the arguments passed to the bound function, whenever the bound function is called.
*/
function list() {
    return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3);
 
var leadingThirtysevenList = list.bind(undefined, 37);
jslog.info(list1);
jslog.info(leadingThirtysevenList());
jslog.info(leadingThirtysevenList(1,2,3));
jslog.info(leadingThirtysevenList(list1,1,2,3));
jslog.info(leadingThirtysevenList(list1, list1));

/*
By default within window.setTimeout(), 
the this keyword will be set to the window (or global) object. 
When working with class methods that require this to refer to class instances, 
you may explicitly bind this to the callback function, in order to maintain the instance.
*/
function lateBloomer() {
    this.petalCount = Math.ceil(Math.random() * 11) + 1;
}

lateBloomer.prototype.bloom = function (delayTime) {
    window.setTimeout(this.declare.bind(this), delayTime);
}

lateBloomer.prototype.declare = function () {
    this.petalCount = 12;
    jslog.info("the flower with " + this.petalCount + " petals.");
};

var flower = new lateBloomer();
flower.bloom(2000);

lateBloomer.prototype.declare = function () {
    jslog.info("the flower with " + this.petalCount + " petals.");
};

var flower = new lateBloomer();
flower.bloom(4000);

//iterators
/*
Processing each of the items in a collection is a very common operation. 
JavaScript provides a number of ways of iterating over a collection, 
from simple for loops to map() and filter(). 
Iterators and Generators bring the concept of iteration directly into the core language 
    and provide a mechanism for customizing the behavior of for...of loops.

An object is an iterator when it knows how to access items from a collection one at a time, 
while keeping track of its current position within that sequence. 
In JavaScript an iterator is an object that provides a next() method 
    which returns the next item in the sequence. 
This method returns an object with two properties: done and value.
*/
function makeIterator(array) {
    var nextIndex = 0;

    return {
        next: function () {
            return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { done: true };
        }
    }
}

var it = makeIterator(['test1', 'test2']);
jslog.info(it.next().value);
jslog.info(it.next().value);
jslog.info(it.next().done);


/*
While custom iterators are a useful tool, 
their creation requires careful programming due to the need to explicitly maintain their internal state. 
Generators provide a powerful alternative: 
they allow you to define an iterative algorithm by writing a single function which can maintain its own state.
A generator is a special type of function 
    that works as a factory for iterators. 
A function becomes a generator if it contains one or more yield expressions and if it uses the function* syntax.
*/

function* idMaker() {
    var index = 0;
    while (true) {
        yield index++;
    }
}

var gen = idMaker();
jslog.info(gen.next().value);
jslog.info(gen.next().value);






/*

*/
//array and set
$("#btn-showArray")
    .ready(function() {

        $("#btn-showArray").click(function () {
                //array
                $("p#infoOutput").text("");

                var mapping = new Map();
                mapping.set("1", "test1");
                mapping.set("2", "test2");
                showInfoOutput("p#infoOutput", mapping.get("2"));
                mapping.set("2", "test3");
                showInfoOutput("p#infoOutput", mapping.get("2"));

                mapping.set("test3", "3");
                showInfoOutput("p#infoOutput", mapping.get("test3"));

            });
    });

$("#btn-showSet")
    .ready(function () {
        $("#btn-showSet")
            .click(function () {

                $("p#infoOutput").text("");
                //set
                var set = new Set();
                set.add("test1");
                set.add("test2");
                set.add("test1");
                set.add("test3");
                showInfoOutput("p#infoOutput", set.size);
                for (var item of set) {
                    showInfoOutput("p#infoOutput", item);
                }
            });

    });

