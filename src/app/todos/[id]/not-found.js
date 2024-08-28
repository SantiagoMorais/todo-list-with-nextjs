import Link from "next/link"

const TodoNotFound = () => {
  return (
    <div>
      <h2>Todo not found</h2>
      <Link href="/">Go back home page</Link>
    </div>
  )
}

export default TodoNotFound