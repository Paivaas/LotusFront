"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/icons/utilities/lotus-icon.svg";


//Import dos componentes do nav
import { PerfilDoula, PerfilDoulaAtivo } from '@/components/nav/perfil';
import Cegonha from "@/public/img/Cegonha.svg"
import { Logout } from '@/components/nav/logout';
import { NavTop } from '@/components/nav/navTop';
import CheckList from '@/components/checkList';
import Agenda from '@/components/agenda';
import ComentariosDoula from '@/components/comentario/comentarioDoula';
import ComentariosGestante from '@/components/comentario/comentarioGestante';
import Loading from '@/components/loading';
import { DegradeOrange, DegradeRed } from '@/components/degrade';
import { HomeDoula, HomeDoulaAtivo } from "@/components/nav/home";
import { ConteudosDoula } from "@/components/nav/conteudos";


export default function Home() {

  return (
    <div className="h-screen w-screen flex p-6 gap-4 overflow-hidden max-md:flex-col">

      <nav className="flex flex-col justify-between text-gray-3 max-md:flex-col">

        <div className="flex flex-col gap-4">

          <NavTop></NavTop>

          <ul className="flex flex-col gap-2 max-md:flex-wrap mt-8 max-md:flex-row max-md:">

            <HomeDoulaAtivo></HomeDoulaAtivo>
            <ConteudosDoula></ConteudosDoula>
            <PerfilDoula></PerfilDoula>

          </ul>
        </div>

        <Logout></Logout>

      </nav>

      <main className="w-full h-full bg-gray-1 rounded-2xl">


        <section className="w-full h-full flex flex-col p-6 gap-3">

          {/* Adicione o conteudo aqui */}

          <div>
            <h1 className="font-ABeeZee text-xl text-gray-4">Olá, sempre bom te ver!</h1>
            <p className="font-ABeeZee text-gray-3">Na maternidade, cada dia é uma nova chance de aprender, amar e crescer juntos.</p>
          </div>

          <div className="w-full h-full">
            <div className="text-gray-400 flex flex-col h-full justify-center items-center ">


              <Image className="w-1/2 max-xl:w-1/4" alt="" src={
                Cegonha
              }></Image>

              <h1 className="font-ABeeZee text-pink-3 text-2">Lotus. Maternidade</h1>

            </div>
          </div>

        </section>

      </main>

    </div>
  );
}
