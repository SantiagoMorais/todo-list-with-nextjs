import Link from "next/link";
import { db } from "@/db";
import Button from "@/components/button";
import { redirect } from "next/navigation";

export default async function Home() {
   // ao utilizarmos um método await, precisamos mudar nosso componente para async
   const todos = await db.todo.findMany();

   const handleDeleteTodo = async (formData: FormData) => {
      "use server";

      const id = Number(formData.get("id"));

      await db.todo.delete({
         where: { id },
      });

      redirect("/")
   };

   return (
      <main className="container mx-auto p-4">
         <h1 className="text-2xl font-bold mb-4 text-center">Todos!</h1>
         <div className="space-y-4">
            {/* Preciso retornar um parenteses () ao invés de chaves {} pois é um OBJETO */}
            {todos.map((todo) => (
               <div
                  key={todo.id}
                  className="bg-gray-100 rounded-lg shadow px-2 py-1"
               >
                  <div className="flex justify-between items-start">
                     <div className="px-2">
                        <h2 className="text-xl font-semibold">{todo.title}</h2>
                        <p>{todo.description}</p>
                     </div>
                     <div className="flex space-x-2 mt-3">
                        <Link
                           href={`/todos/${todo.id}`}
                           className="bg-blue-500 duration-300 hover:bg-blue-400 font-bold text-white py-1 px-2 rounded"
                        >
                           Visualize
                        </Link>
                        <Link
                           href="/"
                           className="bg-yellow-500 duration-300 hover:bg-yellow-400 font-bold text-white py-1 px-2 rounded"
                        >
                           Edit
                        </Link>
                        <form action={handleDeleteTodo}>
                           <input type="hidden" name="id" value={todo.id} />
                           <Button>Delete</Button>
                        </form>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </main>
   );
}
