import React from 'react'


function Header({inputval, Writetodo, addTodo}) {
    return (
        <>


            <h1 className='text-3xl font-bold'>ToDo List</h1>
            <input className='w-[24em] rounded-md h-11 mt-5 text-black p-5' type="text" placeholder='enter a task' value={inputval} onChange={Writetodo} />
            <button onClick={addTodo} className='rounded-md bg-green-700 p-2 ml-6 font-bolder text-xl'>+</button>
           
         

   
        </>
    )
}

export default Header