import React from 'react'

function Todo({todo, index,deleteTodo}) {
    return (
        <div className='flex items-center justify-center mt-10  '>
            <p className='w-[28em] h-12 p-3 bg-slate-100 text-black rounded text-left  align-middle relative'>{todo}</p>
            <input type="checkbox" name="checked" id="check" className='absolute right-[600px]' />
            <button onClick={()=> deleteTodo(index)} className='absolute  right-[550px] font-extrabold bg-red-600 p-1 rounded-full w-10   '>X</button>


        </div>
    )
}

export default Todo