"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import Icon from "@/public/icons/nav/logout.svg";
import { useState } from "react";  // Importar useState para gerenciar o estado de carregamento
import Loading from "../teste";  // Componente Loading

export function Logout() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);  // Gerenciar o estado de loading

    const logout = () => {
        setLoading(true);  // Ativar o loading ao clicar no botão

        // Esperar 5 segundos antes de redirecionar
        setTimeout(() => {
            setLoading(false);  // Desativar o loading
            router.push('/');  // Redirecionar para a página inicial
        }, 4000);  // 5000ms = 5 segundos
    }

    return (
        <div>
            {loading && <Loading />}  {/* Exibir o componente Loading enquanto o estado estiver true */}

            <button onClick={logout}>
                <div className="flex max-md:items-center gap-2 cursor-pointer bg-gray-1 rounded-2xl justify-center mt-4 hover:bg-white animate-jump animate-once animate-duration-[400ms] animate-ease-in-out">
                    <Image className="w-[15px]" alt="Arrow Icon" src={Icon}></Image>
                    <h1>Log out</h1>
                </div>
            </button>
        </div>
    )
}
