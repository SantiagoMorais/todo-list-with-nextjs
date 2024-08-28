"use client";

interface IButton {
   children: React.ReactNode;
}

const Button: React.FC<IButton> = ({ children }) => {
   return (
      <button className="bg-red-500 duration-300 hover:bg-red-400 font-bold text-white py-1 px-2 rounded">
         {children}
      </button>
   );
};

export default Button;
