const car={
    name:'Rolls Royce',
    model:'Fantum',
    year:'2021',
    variant:'UK',
    work:function(){
        console.log('Car is Running');
    },
    details:function(){
        console.log(this.name+"-"+this.model+"-"+this.year+"-"+this.variant+"-");
    }
};
let json={
    "name":"Gokul",
    "Place":"Theni",
    "State":"Tamil Nadu",
    "country":"India",
    "favorites":['Chocolates','Watching movies']
};
console.log(json['name']);
console.log(json['favorites'].toString());
window.alert("Unprotected Page");
let a=Math.random()*1000;
document.getElementById('Random').innerHTML="Random number between 0 and 100 is "+a;
let x=5,y=10;
var z=x+y;
console.log(z);
document.getElementById("demo").innerHTML="The addition of Numbers x: "+x+" and y: "+y+" is "+z+" using JavaScript.";
function printScreen(){
    window.print();
}
function func(){
    document.getElementById("h22").innerHTML=Date();
}
function on(){
    document.getElementById("image").src="https://www.w3schools.com/js/pic_bulbon.gif";
}
function off(){
    document.getElementById("image").src="https://www.w3schools.com/js/pic_bulboff.gif";
}

function createList(){
    let html='<ul>';
    let arr=["Cappucino","Expresso","Latte","Cold Coffee"];
    for(let n of arr){
        html+='<li>'+n+'</li>';
    }
    html+='</ul>';
    document.getElementById('list').innerHTML=html;
}

removeList=function(){
    document.getElementById('list').innerHTML="";
}
class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display=function(){
        console.log(this.name+'-----'+this.age);
    }
}
st1=new Student("Gokul",20);
console.log(st1.display());