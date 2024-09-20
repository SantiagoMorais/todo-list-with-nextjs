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

export interface ITodoFormValues {
   id: number;
   title: string;
   description: string;
}
export interface IFormState<T> {
   values: T;
   errors: Record<keyof T, string>;
   isSubmitting: boolean;
}

export const updateTodo = async (
   formState: IFormState<ITodoFormValues>,
   formData: FormData
): Promise<IFormState<ITodoFormValues>> => {
   const title = formData.get("title") as string;
   const description = formData.get("description") as string;
   const id = Number(formData.get("id"));

   let errors: Record<keyof ITodoFormValues, string> = {
      id: "",
      title: "",
      description: "",
   };

   switch (true) {
      case !title:
         errors.title = "The title is not valid.";
         break;
      case title.length < 5:
         errors.title = "The title must have at least 5 characters";
         break;
      case !description:
         errors.description = "The description is not valid.";
         break;
      case description.length < 5:
         errors.description = "The description must have at least 5 characters";
         break;
   }

   if (errors.title || errors.description) {
      return {
         ...formState,
         errors,
      };
   }

   await db.todo.update({
      where: { id },
      data: { title, description },
   });

   return (
      redirect("/"),
      {
         ...formState,
         errors: {
            id: "",
            title: "",
            description: "",
         },
         values: { id, title, description },
      }
   );
};
