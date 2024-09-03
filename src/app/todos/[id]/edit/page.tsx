import { findTodoById } from '@/actions'
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
    <div>
      <h1>Editando {todo?.title}</h1>
    </div>
  )
}

export default TodoEdit