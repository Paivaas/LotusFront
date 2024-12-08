"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import Icon from "@/public/icons/nav/monitoramento.svg"
import IconAtivo from "@/public/icons/nav/Ativo/monitoramento.svg"

export function MonitoramentoGestante() {

    const router = useRouter();
    const MonitoramentoGestante = () => {
        router.push('/gestante/monitoramento');
    }

    return (
        <button onClick={MonitoramentoGestante}>
            <div className=" flex items-center gap-2 bg-white p-2 rounded-xl w-44 cursor-pointer hover:bg-gray-2  transition duration-150 ease-in-out">
                <Image className="w-[15px]" alt="Arrow Icon" src={Icon}></Image>
                <li>Monitoramento</li>
            </div>
        </button>
    )

}

export function MonitoramentoGestanteAtivo() {

    const router = useRouter();
    const MonitoramentoGestante = () => {
        router.push('/gestante/monitoramento');
    }

    return (
        <button onClick={MonitoramentoGestante}>
            <div className="animate-duration-[400ms] animate-fade-right animate-once flex items-center gap-2 p-2 rounded-xl w-44 cursor-pointer bg-red-degrade-1">
                <Image className="w-[15px]" alt="Arrow Icon" src={IconAtivo}></Image>
                <li className="text-red-degrade-3">Monitoramento</li>
            </div>
        </button>
    )
}


