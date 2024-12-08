"use client";
// Tela Doula

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

// Import das imagens 
import LotusIcon from "@/public/icons/utilities/lotus-icon.svg"
import ArrowPink from "@/public/icons/utilities/arrow-pink.svg"
import ArrowOrange from "@/public/icons/utilities/arrow-orange.svg"
import AgendaOrange from "@/public/icons/utilities/calendar-orange.svg"
import ChecklistIcon from "@/public/icons/profile-information/pink/baby.svg"
import Cegonha from "@/public/img/Cegonha.svg"

//Import dos componentes do nav
import { HomeGestante, HomeGestanteAtivo } from '@/components/nav/home';
import { GaleriaGestante, GaleriaGestanteAtivo } from '@/components/nav/galeria';
import { MonitoramentoGestante, MonitoramentoGestanteAtivo } from '@/components/nav/monitoramento';
import { PerfilGestante, PerfilGestanteAtivo } from '@/components/nav/perfil';
import { ConteudosGestante, ConteudosGestanteAtivo } from '@/components/nav/conteudos';
import { Logout } from '@/components/nav/logout';
import CheckList from '@/components/checkList';
import Agenda from '@/components/agenda';
import Calendario2 from '@/components/calendario2';
import Loading from '@/components/loading';
import { DegradePurple } from '@/components/degrade';
import Login, { home } from '@/app/login/page'
import { useUser } from "@/context/contextUser";


export default function HomePageGestante() {

   //  const { user } = useUser();

    const [selectedComponent, setSelectedComponent] = useState(null);
    return (

        <div className="h-screen w-screen flex p-6 gap-4 overflow-x-hidden max-md:flex-col">

            <nav className="flex flex-col justify-between text-gray-3 max-md:flex-col">

                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-pink-3">
                        <Image className="w-[40px]" alt="Arrow Icon" src={LotusIcon}></Image>
                        <h1 className="font-ABeeZee">Lotus</h1>
                    </div>

                    <ul className="flex flex-col gap-2 max-md:flex-wrap mt-8 max-md:flex-row max-md:">
                        <HomeGestanteAtivo></HomeGestanteAtivo>
                        <MonitoramentoGestante></MonitoramentoGestante>
                        <ConteudosGestante></ConteudosGestante>
                        <GaleriaGestante></GaleriaGestante>
                        <PerfilGestante></PerfilGestante>
                    </ul>
                </div>

                <Logout></Logout>

            </nav>

            <main className="w-full h-full bg-gray-1 rounded-2xl">

                <section className="w-full h-full flex">

                    <div className="p-4 flex w-[85vw] max-xl:flex-col">

                            <div className="max-xl:w-full max-xl:h-1/4 max-md:p-0   w-1/2 h-full flex flex-col justify-between p-6">

                                <div>
                                    <h1 className="font-ABeeZee text-xl text-gray-4">Olá, sempre bom te ver!</h1>
                                    <p className="font-ABeeZee text-gray-3">Na maternidade, cada dia é uma nova chance de aprender, amar e crescer juntos.</p>
                                </div>

                            <div className="  max-xl:px-0  max-md:gap-2   flex max-xl:flex-row flex-col gap-6 space-x-2 px-16 max-xl:w-full  ">
                                <button
                                    className="max-xl:w-1/2 max-xl:h-14 hover:border-b-4 hover:border-orange-3 ease-out duration-300 bg-white rounded-3xl text-slate-900 h-28 justify-between drop-shadow-lg px-4 flex items-center text-white"
                                    onClick={() => setSelectedComponent("agenda")}
                                >
                                    <div className="flex ">
                                        <Image className="w-[3vw] max-xl:w-4" alt="" src={
                                            AgendaOrange
                                        }></Image>

                                        <div className="text-gray-4 ml-4">
                                            <h1 className="text-left text-xl max-xl:text-base">Agenda</h1>
                                            <p className="text-left max-xl:hidden">Anote seus compromissos</p>
                                        </div>
                                    </div>
                                    <Image className="w-[3vw] max-xl:w-6" alt="" src={
                                        ArrowOrange
                                    }></Image>

                                </button>

                                <button
                                    className="max-xl:w-1/2 max-xl:h-14 hover:border-b-4 hover:border-pink-3 bg-white ease-out duration-300 rounded-3xl text-slate-900 h-28 justify-between drop-shadow-lg px-4 flex items-center text-white"
                                    onClick={() => setSelectedComponent("checklist")}
                                >
                                    <div className="flex">
                                        <Image className="w-[3vw] max-xl:w-4" alt="" src={
                                            ChecklistIcon
                                        }></Image>

                                        <div className="text-gray-4 ml-4">
                                            <h1 className="text-left text-xl max-xl:text-base">Checklist</h1>
                                            <p className="text-left max-xl:hidden">Monte seu enxoval no checkList</p>
                                        </div>
                                    </div>
                                    <Image className="w-[3vw] max-xl:w-6" alt="" src={
                                        ArrowPink
                                    }></Image>

                                </button>
                            </div>

                        </div>

                        <div
                            id="aparecerAqui"
                            className="max-xl:w-full max-md:mt-4   w-1/2 h-[90vh] text-white"
                        >
                            {selectedComponent === "agenda" && <Agenda />}
                            {selectedComponent === "checklist" && <CheckList />}
                            {!selectedComponent && (
                                <div className="text-gray-400 flex flex-col h-full justify-center items-center ">


                                    <Image className="w-1/2 max-xl:w-1/4" alt="" src={
                                        Cegonha
                                    }></Image>

                                    <h1 className="font-ABeeZee text-pink-3 text-2">Lotus. Maternidade</h1>

                                </div>
                            )}
                        </div>
                    </div>
                    {/* Adicione o conteudo aqui */}

                </section>

            </main>

        </div>
    );
}