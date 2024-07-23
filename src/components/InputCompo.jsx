import React from 'react'
import Todo from './Todo'

function InputCompo({todos , deleteTodo}) {
    return (

        <>

        {todos.map((todo, index)=>{
            return(
                <Todo todo={todo} index={index} deleteTodo={deleteTodo} key={index}/>
            )
        })}
   
        </>
    )
}

export default InputCompo