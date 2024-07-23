
import Header from './components/Header'
import InputCompo from './components/InputCompo'
import './App.css'
import { useState } from 'react'

function App() {

  const[inputval, setinputval]= useState('');
  const [todos, settodos]= useState([])

  function Writetodo(e){
    setinputval(e.target.value);
  }

  function addTodo(){
   if(inputval !== ""){
    settodos((pretodo) => [...pretodo, inputval]);
    setinputval('')
   }
  }

function deleteTodo(todoindex){

  settodos((pretodo)=>
     pretodo.filter((pretodo, prevtodoindex) =>{
   return prevtodoindex != todoindex

  } )  )

}

  return (
    <>

      <Header inputval={inputval} Writetodo={Writetodo} addTodo={addTodo}/>
      <InputCompo todos={todos} deleteTodo={deleteTodo}/>

    </>
  )
}

export default App
