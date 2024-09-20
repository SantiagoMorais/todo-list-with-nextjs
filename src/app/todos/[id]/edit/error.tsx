"use client"

import Link from "next/link";

const TodoEditErrorPage = () => {
   return (
      <div>
         <h1>
            Ocorreu um problema, tente novamente mais tarde.
         </h1>
         <Link href={"/"}>Voltar para a página inicial.</Link>
      </div>
   );
};

export default TodoEditErrorPage;
