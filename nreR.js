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
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            time:new Date().toLocaleTimeString()
        }
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
        </div>
    </header>
        )
    }
}

root.render(
    <App name={obj1.name} 
    rating={obj1.rating} 
    author={obj1.author}/>
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