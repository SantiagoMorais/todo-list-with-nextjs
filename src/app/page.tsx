import Link from "next/link";
import { db } from "@/db";

export default async function Home() {
   // ao utilizarmos um método await, precisamos mudar nosso componente para async
   const todos = await db.todo.findMany();

   return (
      <main className="container mx-auto p-4">
         <Link href={"/todos/create"}>Criar novo todo</Link>
         <h1 className="text-2xl font-bold mb-4 text-center">Todos!</h1>
         <div className="space-y-4">
            {/* Preciso retornar um parenteses () ao invés de chaves {} pois é um OBJETO */}
            {todos.map((todo) => (
               <div key={todo.id} className="bg-gray-100 rounded-lg shadow">
                  <div className="flex justify-between items-start">
                     <div className="px-2">
                        <h2>{todo.title}</h2>
                        <p>{todo.description}</p>
                     </div>
                     {/* Ações */}
                  </div>
               </div>
            ))}
         </div>
      </main>
   );
}
