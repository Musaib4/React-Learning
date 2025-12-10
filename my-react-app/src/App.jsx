import Header from './header.jsx'
import Footer from './footer.jsx'
import Card from './card.jsx'
import List from './list.jsx'
import { UserGreeting, Props } from "./props.jsx";


function App() {

  const Fruit = [
    {id:1 ,name:"Apple",category:"fruit",calories:45},
    {id:2 ,name:"Banana",category:"fruit",calories:55},
    {id:3 ,name:"Grapes",category:"fruit",calories:95},
    {id:4 ,name:"Orange",category:"fruit",calories:105},
  ]
  const veg = [
    {id:5 ,name:"Apple",category:"fruit",calories:45},
    {id:6 ,name:"Banana",category:"fruit",calories:55},
    {id:7 ,name:"Grapes",category:"fruit",calories:95},
    {id:8 ,name:"Orange",category:"fruit",calories:105},
  ]

  return (
    <>
      <UserGreeting isLoggedIn = {true} username ="musaib"/>
      <Header></Header>
      <List items = {Fruit} category ="Fruit" />
      <List items = {veg}  category = "veg"/>
      <Props />
      <Card></Card>
      <Footer></Footer>
    </>
  )
}

export default App
