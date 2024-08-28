import Link from "next/link";

const Header = () => {
   return (
      <header className="bg-blue-500 text-white px-4 py-2">
         <nav className="container mx-auto flex justify-center gap-2">
            <Link href="/" className="duration-300 border border-transparent px-2 py-1 rounded hover:border-white hover:bg-blue-400 focus:ring focus:ring-blue-400">Todo list</Link>
            <Link href="/todos/create" className="duration-300 border border-transparent px-2 py-1 rounded hover:border-white hover:bg-blue-400 focus:ring focus:ring-blue-400">Create todo</Link>
         </nav>
      </header>
   );
};

export default Header;
