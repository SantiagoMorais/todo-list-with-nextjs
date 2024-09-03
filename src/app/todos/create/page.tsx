import { handleAddTodo } from "@/actions";

const TodoPage = () => {
   return (
      <div className="max-w-md mx-auto mt-10">
         <h1 className="text-2xl font-bold text-center mb-6">
            Create a new todo
         </h1>
         <form
            // Como action, o nosso form deve utilizar a função
            action={handleAddTodo}
            className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg"
         >
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
               />
            </label>
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
               />
            </label>
            <button
               type="submit"
               className="px-2 py-1 bg-blue-500 text-white font-semibold rounded-md duration-300 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
               Create todo
            </button>
         </form>
      </div>
   );
};

export default TodoPage;
