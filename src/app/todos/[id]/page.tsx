import { db } from "@/db";
import { notFound } from "next/navigation";

interface IShowTodo {
   params: {
      id: string;
   };
}

const ShowTodo: React.FC<IShowTodo> = async ({ params }) => {
   await new Promise((a) => setTimeout(a, 2000))

   const id: number = Number(params.id);

   if (Number.isNaN(id)) return notFound();

   const currentTodo = await db.todo.findFirst({
      where: {
         id,
      },
   });

   if (!currentTodo) return notFound();

   return (
      <div>
         <p>este é o todo {currentTodo?.id}</p>
         <p>Título do todo: {currentTodo?.title}</p>
         <p>descrição: {currentTodo?.description}</p>
      </div>
   );
};

export default ShowTodo;
