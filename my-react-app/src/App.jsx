// import Header from './header.jsx'
// import Footer from './footer.jsx'
// import Card from './card.jsx'
// import List from './list.jsx'
// import { UserGreeting, Props } from "./props.jsx";
// import {Button1, Football, Football1} from './button.jsx'
// import {Counter,NameInput,Toggle,list,User} from './useState.jsx'
// import onChange from './onChange.jsx';
// import {UpdateArray,UpdateCounter,Profile} from './updaterFunc.jsx';
import ToDo from './todo.jsx';
import Users from './useEffect.jsx';
import Check from './useContext.jsx';
import{Refren,RefCounter} from './useRef.jsx'

function App() {

  // const Fruit = [
  //   {id:1 ,name:"Apple",category:"fruit",calories:45},
  //   {id:2 ,name:"Banana",category:"fruit",calories:55},
  //   {id:3 ,name:"Grapes",category:"fruit",calories:95},
  //   {id:4 ,name:"Orange",category:"fruit",calories:105},
  // ]
  // const veg = [
  //   {id:5 ,name:"Apple",category:"fruit",calories:45},
  //   {id:6 ,name:"Banana",category:"fruit",calories:55},
  //   {id:7 ,name:"Grapes",category:"fruit",calories:95},
  //   {id:8 ,name:"Orange",category:"fruit",calories:105},
  // ]

  return (
    <>
      {/* /* <UserGreeting isLoggedIn = {true} username ="musaib"/>
      <Header></Header>
      <UpdateArray/>
      {Fruit.length>0 && <List items = {Fruit} category ="Fruit" />}
      {veg.length>0 &&<List items = {veg}  category = "veg"/>}
      <Button1></Button1>
      <UpdateCounter />
      <Football />
      <Football1 />
      <Props />
      <Card></Card>
      <Footer></Footer> */ }

        <Refren/>
        <RefCounter/>

      {/* <Check/>

    <Users/> */}
    </>
  )
}

export default App
