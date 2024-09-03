"use server";

import { db } from "./db";
import { redirect } from "next/navigation";

export const handleDeleteTodo = async (formData: FormData) => {
   const id = Number(formData.get("id"));

   await db.todo.delete({
      where: { id },
   });

   redirect("/");
};

export const handleAddTodo = async (formData: FormData) => {
   // vamos abstrair os dados do formulário
   const formTitle = formData.get("title");
   const formDescription = formData.get("description");
   const status = "pending";

   const title = typeof formTitle === "string" ? formTitle : "";
   const description =
      typeof formDescription === "string" ? formDescription : "";

   await db.todo.create({
      data: {
         title,
         description,
         status,
      },
   });

   redirect("/");
};

export const findTodoById = async (id: number) => {
   const todo = await db.todo.findFirst({
      where: { id },
   });

   return todo;
};
