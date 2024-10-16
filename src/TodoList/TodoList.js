import '../TodoList/TodoLis.css'

function TodoList({children}){
    return(
       <ul className='TodoList'>
        {children}
       </ul>
    )
}

export {TodoList}