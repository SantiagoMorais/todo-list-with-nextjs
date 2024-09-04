import { findTodoById } from '@/actions'
import TodoForm from '@/components/todoForm'
import React from 'react'

interface ITodoEdit {
  params: {
    id: string
  }
}

const TodoEdit: React.FC<ITodoEdit> = async ({params}) => {
  const id = Number(params.id)

  const todo = await findTodoById(id);

  return (
    <div className='max-w-md mx-auto mt-10'>
      <h1 className='text-center text-2xl font-bold mb-6'>Editando {todo?.title}</h1>
      <TodoForm todo={todo}/>
    </div>
  )
}

export default TodoEdit