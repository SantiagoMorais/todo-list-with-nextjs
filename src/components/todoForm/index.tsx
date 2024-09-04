"use client";

import { useFormState } from "react-dom";
import { IFormState, ITodoFormValues, updateTodo } from "@/actions";
import React from "react";

interface ITodoForm {
   todo: {
      id: number;
      title: string;
      description: string | null;
   } | null;
}

const TodoForm: React.FC<ITodoForm> = ({ todo }) => {
   const [formState, action] = useFormState<IFormState<ITodoFormValues>>(updateTodo, {
      values: {
         id: "",
         title: "",
         description: "",
      },
      errors: {
         title: "",
         description: "",
      },
      isSubmitting: false,
   });

   return (
      <form
         action={action}
         className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg"
      >
         <input type="hidden" name="id" id="id" value={todo?.id} />

         <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
         >
            Title
            <input
               type="text"
               name="title"
               id="title"
               className="mt-1 px-2 py-1 border border-gray-300 rounded-md w-full"
               placeholder="Enter the title"
               required
               defaultValue={todo?.title}
            />
         </label>
         <p
            className={`mb-2 block text-red-600 font-bold opacity-0 duration-300 h-0 ${formState.errors.title && "opacity-100 h-5"}`}
         >
            {formState?.errors.title}
         </p>

         <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
         >
            Description
            <textarea
               name="description"
               id="description"
               className="mt-1 px-2 py-1 border border-gray-300 rounded-md w-full resize-none h-32"
               placeholder="Enter the description"
               required
               defaultValue={todo?.description ? todo?.description : ""}
            />
         </label>
         <p
            className={`mb-2 block text-red-600 font-bold opacity-0 duration-300 h-0 ${formState.errors.description && "opacity-100 h-5"}`}
         >
            {formState?.errors.description}
         </p>
         <button
            type="submit"
            className="px-2 py-1 bg-blue-500 text-white font-semibold rounded-md duration-300 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
         >
            Editar todo
         </button>
      </form>
   );
};

export default TodoForm;
