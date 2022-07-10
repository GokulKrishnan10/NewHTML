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
