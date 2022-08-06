const root=ReactDOM.createRoot(
    document.getElementById('root')
)
const obj1={
    name:"The Harry Potter",
    rating:4,
    author:{
        name:'J K rowling',
        worth:'$3 biillion'
    }
}
function ToCelsius(fahrenheit){
    return (fahrenheit-32)*5/9;
}
function ToFahrenheit(celsius){
    return (celsius*9/5)+32;
}
function Boiling(props){
    if(props.temparature>=100){
        return <h3>The Water will boil</h3>
    }
    return <h3>The Water won't Boil</h3>
}
function Compo2(){
    return(
        <div className="compo2">
            <h2>Composition2</h2>
        </div>
    )
}
function Compo1(){
    return(
        <div className="compo1">
            <h1>Composition1</h1>
        </div>
    )
}
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment(){
        this.setState((prevState)=>(
                {
                    count:prevState.count+1
                }
            )
        )
    }
    decrement(){
        this.setState(
            (prevState)=>(
                {
                    count:prevState.count-1
                }
            )
        )
    }
    incrementFive(){
        for(let i=0;i<5;i++){
            this.increment();
        }
    }
    decrementFive(){
        for(let i=0;i<5;i++){
            this.decrement();
        }
    }
    render(){
        return(
            <div>
                <h1>count - {this.state.count}</h1>
                <button onClick={()=>this.incrementFive()}>Incremenet</button> 
                <br></br><br></br>
                <button onClick={()=>this.decrementFive()}>Decrement</button>
            </div>
        )
    }
}
const b1 = {
    fontSize: '28px',
    backgroundColor: 'rgb(63, 181, 232)',
    height: '2cm',
    width: '6cm',
    fontFamily: 'Segoe UI',
    borderRadius: '35px',
    cursor: 'pointer',
    marginLeft: '4cm'
  }
  const country=['India','Cannada','USA','UK','Venezula']
  const countries=[]
  for(let element of country){
    countries.push(
        <li>
            {element}
        </li>
    )
  }
  const arr=[6,9,8,7,5,1,4,2,3,10]
  const list=arr.map((number)=>
        <li key={number.toString()}>
            {number}
        </li>
  );
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            time:new Date().toLocaleTimeString(),
            word:'Click to Subsrcibe',
            text:'Subscribe',
            button:true,
            name:'',
            temp:0,
            fahren:32,
            
        }
        console.log(this)
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    componentDidMount(){
        this.timerID=setInterval(
            ()=>(this.tick()),1000
        )
    }
    tick(){
        this.setState(
            {
                time:new Date().toLocaleTimeString()
            }
        )
    }
    
    changeText(){
        if(this.state.text=='Unsubscribe'){
            this.setState(
                {
                    word:'You Unsubscribed',
                    text:'Subscribe',
                    button:true
                }
            )
        }
        else{
            this.setState(
                {
                    word:'Thanks for Subscribing',
                    text:'Unsubscribe',
                    button:false
                }
            )
        }
        
    }

    handleChange=(event)=>{
        this.setState(
            {
                name:'Welcome, '+event.target.value,
                value:event.target.value
            }
        )
    }

    handleSubmit=(event)=>{
        // this.setState(
        //     {
        //         name:this.state.value
        //     }
        // )
        alert("Form Submitted  "+this.state.value)
        event.preventDefault();
    }

    handleCelsiusTemperature=(event)=>{
        this.setState(
            {
                temp:event.target.value,
                fahren:ToFahrenheit(event.target.value)
            }
        )
    }

    handleFahrenheitTemperature=(event)=>{
        this.setState(
            {
                fahren:event.target.value,
                temp:ToCelsius(event.target.value)
            }
        )
    }

    render(){
        return(
    <header>
        <div>
            <nav className="nav1">
                 <div>
                    <div className="new1">
                        <div className="menu"></div>
                        <div className="menu"></div>
                        <div className="menu"></div>
                    </div>
                    <ol className="navbar">
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Exit</li>
                    </ol>
                </div>
            </nav>
            
        </div>
        <Destination name="Gokul" age="20" />
        <h1>Name :{this.props.name}</h1>
        <h2>{this.props.rating}</h2>
        <h3>Authors</h3>
        <h3>{this.props.author.name}</h3>
        <h3>Worth, {this.props.author.worth}</h3>
        <h2>It is {this.state.time}.</h2>
        <div>
            <Counter ></Counter>
            <br></br>
            <br></br>
            <button onClick={()=>this.changeText()} className={
                (this.state.button)?"Default":"ChangeColorRed"
            }>{this.state.text}</button>
            <h1>{this.state.word}</h1>
        </div>
        <h2>{this.state.name}</h2>  
        <div className="form1">
            <form className="formInput" onSubmit={this.handleSubmit}>
                <label>
                    UserName:
                    <input
                    type="text" onChange={this.handleChange}/>
                    <br/>
                    Password
                    <input
                    type="password" />
                    <br/>
                    DOB:
                    <input type="date" />
                    <br/>
                    <input type="submit" value="Submit" className="submit" />
                </label>
            </form>         
        </div>
        <br />
        <div className="form2">
            <form>
                <fieldset>
                    <legend>Temperature in Celsius</legend>
                    Enter the Temperature in Celsius:
                    <input value={this.state.temp} onChange={this.handleCelsiusTemperature} />
                </fieldset>
            </form>
        </div>
        <br />
        <div className="form3">
            <form>
                <fieldset>
                    <legend>Temperature in Fahrenheit</legend>
                    Enter the Temperature in Fahrenheit:
                    <input value={this.state.fahren}  onChange={this.handleFahrenheitTemperature}/>
                </fieldset>
            </form>
        </div>
        <Boiling temparature={parseFloat(this.state.temp)}/>
        <div>
            Composition: components passed as props to other component
            {this.props.comp1}
        </div>
        <div>
            {this.props.comp2}
        </div>
        </header>
        )
    }
}
root.render(
    <App name={obj1.name} 
    rating={obj1.rating} 
    author={obj1.author}
    comp1={<Compo1 />}
    comp2={<Compo2 />}/>
)
function Destination(props) {
    return (
        <div>
            <h1 >Hola, Hi There ,{props.name} and your age is {props.age}</h1>
        </div>
    )
}
const car = {
    name: 'Lamborgini',
    model: 'Urus Pearl Capsule',
    startingPrice: 225500,
    GetCar: function () {
        return this.name + "----" + this.model
    }
}
const Clock = function () {
    return (
        <div>
           
        </div>
    )
}
const des = (<h1>This is a new beginning</h1>)
//Rendering a custom component

// ReactDOM.render(
   
//     document.getElementById('root')
// )

// const root = ReactDOM.createRoot(
//     document.getElementById('root')
//   );
  
//   function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         
//       </div>
//     );
//     root.render(element);
//   }
  
//   setInterval(tick, 1000);
// function NavBar() {
//     return (
//         <header>
//             <div>
//                 <nav className="nav1">
//                     <div>
//                         <div className="new1">
//                             <div className="menu"></div>
//                             <div className="menu"></div>
//                             <div className="menu"></div>
//                         </div>
//                         <ol className="navbar">
//                             <li>Home</li>
//                             <li>Contact</li>
//                             <li>About</li>
//                             <li>Exit</li>
//                         </ol>
//                         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//                     </div>
//                 </nav>
//             </div>
//         </header>
//     )
// }
// function Destination() {
//     return (
//         <div>
//             <h1 >Uber</h1>
//         </div>
//     )
// }
// const car = {
//     name: 'Lamborgini',
//     model: 'Urus Pearl Capsule',
//     startingPrice: 225500,
//     GetCar: function () {
//         return this.name + "----" + this.model
//     }
// }
// const Clock = function () {
//     return (
//         <div>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     )
// }
// const des = (<h1>This is a new beginning</h1>)
// console.log(car.name)
// //Rendering a custom component

// ReactDOM.render(
//     [<NavBar />,
//     <Destination />, des, <h2>{car.GetCar()}</h2>, <Clock />],
//     document.getElementById('root')
// )