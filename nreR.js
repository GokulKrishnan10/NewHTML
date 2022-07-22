const root=ReactDOM.createRoot(
    document.getElementById('root')
)
function NavBar() {
    const element= (
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
            <Destination name="Gokul" />
        </header>
    )
    root.render(
        [element,des, <h2>{car.GetCar()}</h2>, <Clock />]
    )
}
function Destination(props) {
    return (
        <div>
            <h1 >Hola, Hi There ,{props.name}</h1>
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
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
}
const des = (<h1>This is a new beginning</h1>)
console.log(car.name)
setInterval(NavBar, 1000);
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