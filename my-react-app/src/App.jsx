import Header from './header.jsx'
import Footer from './footer.jsx'
import Card from './card.jsx'
import Props from './props.jsx'


function App() {

  return (
    <>
      <Header></Header>
      <Props name="musaib"age={25} isStudent = {true}/>
      <Props name="musaib"age={25} isStudent = {true}/>
      <Props name="musaib"age={25} isStudent = {true}/>
      <Props name='HELLO'/>
      <Card></Card>
      <Footer></Footer>
    </>
  )
}

export default App
