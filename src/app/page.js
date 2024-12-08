"use client";

import { NavTop } from '@/components/nav/navTop';
import { useRouter } from 'next/navigation';

import Image from "next/image";
import CircleDegrade from "@/public/icons/utilities/circle-degrade.svg"
import Conteudos from "@/public/icons/nav/Ativo/conteudos.svg"
import Galeria from "@/public/icons/nav/Ativo/galeria2.svg"
import Chat from "@/public/icons/nav/Ativo/chat.svg"
import Monitoramento from "@/public/icons/nav/Ativo/monitoramento.svg"

import doula1 from "@/public/img/Doula-1.jpg"
import doula2 from "@/public/img/Doula-2.jpg"
import doula3 from "@/public/img/Doula-3.png"

export default function Page() {

  const router = useRouter();

  const irLogin = () => {
    router.push('/login');
  }
  const irCadastro = () => {
    router.push('/cadastro');
  }

  return (
    <div className="w-screen h-screen overflow-x-hidden">

      <header>
        <div className="h-[40vh] w-full max-xl:w-0 max-xl:hidden flex">

          <div className="w-full">

            <div className="w-1/3 h-1/2 flex align-top justify-start ">
              <Image className="w-[500px] h-[500px] relative bottom-44 right-32" alt="Email Icon" src={CircleDegrade}></Image>
            </div>

            <div className="w-3/5 h-1/2 flex justify-end relative">
              <span className="w-[200px] h-[200px] animate-jump-in animate-infinite animate-duration-[6000ms] animate-alternate rounded-full relative bg-pink-3 opacity-40 flex items-center justify-center"></span>
              <Image className="w-[200px] h-[200px] rounded-full relative right-[200px]" alt="Email Icon" src={CircleDegrade}></Image>
            </div>

          </div>

          <div className="w-1/3 h-full flex justify-end">
            <Image className="w-[450px] h-[450px] rounded-full relative bottom-24 left-24" alt="Email Icon" src={CircleDegrade}></Image>
          </div>

        </div>

        <div className="max-xl:h-20 z-50 max-xl:px-6 bg-white w-full h-16 absolute top-0 justify-between flex px-12 items-center text-gray-4">

          <NavTop></NavTop>

          <div className=' max-xl:gap-2 flex gap-8 items-center'>
            <button onClick={irCadastro}>
              Criar conta
            </button>
            <button onClick={irLogin} className='bg-pink-3 max-xl:px-4 px-8 py-2 rounded-full text-white font-semibold'>
              Entrar
            </button>
          </div>
        </div>

      </header>

      <h1 className="font-ABeeZee text-pink-3 w-full flex justify-center items-end text-4xl">Principais ferramentas</h1>

      <main>
        <section className="text-gray-4 max-xl:mt-32 max-xl:flex-wrap max-xl:h-[40vh] w-full h-[25vh] mt-6 flex justify-center gap-6">

          <div className="cursor-pointer w-56 h-[350px] max-xl:w-2/5 max-xl:h-[230px] bg-white  rounded-2xl flex flex-col justify-center items-center border-4 border-red-degrade-2 hover:animate-wiggle hover:animate-once hover:animate-duration-[600ms]">
            <Image className="w-1/3 max-xl:w-1/4" alt="" src={Monitoramento}></Image>
            <h1 className="text-2xl max-xl:text-xl" >Monitoramento</h1>
            <p className="text-center max-xl:text-sm " >Monitore seu humor e sentimentos durante a gravidez.</p>
          </div>

          <div className="cursor-pointer w-56 h-[350px] max-xl:w-2/5 max-xl:h-[230px] bg-white  rounded-2xl flex flex-col justify-center items-center border-4 border-blue-degrade-2 hover:animate-wiggle hover:animate-once hover:animate-duration-[600ms]">
            <Image className="w-1/3 mb-2 max-xl:w-1/4" alt="" src={Galeria}></Image>
            <h1 className="text-2xl max-xl:text-xl" >Galeria</h1>
            <p className="text-center max-xl:text-sm " >Guarde seus todos os seus bons momentos na nossa galeria.</p>

          </div>

          <div className="cursor-pointer w-56 h-[350px] max-xl:w-2/5 max-xl:h-[230px] bg-white  rounded-2xl flex flex-col justify-center items-center border-4 border-pink-degrade-2 hover:animate-wiggle hover:animate-once hover:animate-duration-[600ms]">
            <Image className="w-1/3 max-xl:w-1/4" alt="" src={Conteudos}></Image>
            <h1 className="text-2xl max-xl:text-xl" >Conteúdos</h1>
            <p className="text-center max-xl:text-sm " >Veja os conteúdos exclusivos publicados por Doulas.</p>

          </div>

          <div className="cursor-pointer w-56 h-[350px] max-xl:w-2/5 max-xl:h-[230px] bg-white  rounded-2xl flex flex-col justify-center items-center border-4 border-purple-degrade-2 hover:animate-wiggle hover:animate-once hover:animate-duration-[600ms]">
            <Image className="w-1/2 max-xl:w-1/4" alt="" src={Chat}></Image>
            <h1 className="text-2xl max-xl:text-xl" >Duvidas</h1>
            <p className="text-center max-xl:text-sm px-[4px]" >Aproveite para tirar suas duvidas e interagir com a comunidade.</p>

          </div>

        </section>

        <section className="max-tcc:h-[46vh] w-full h-[35vh] max-xl:h-[42vh] flex-col flex justify-center items-center gap-6 bg-gray-5">

          <p className='w-96 text-center mt-16 max-xl:mt-24 font-ABeeZee text-gray-4'>
            Aqui, entendemos que cada gravidez é única e cheia de descobertas. Nosso objetivo é ser o seu espaço de acolhimento, informação e apoio.
          </p>
          {/* <button className='bg-orange-3 px-8 py-2 rounded-full text-white font-semibold'>
            Clique aqui
          </button> */}

        </section>

        <section className="max-xl:py-12 mb-4 max-xl:h-auto w-full h-[65vh] flex flex-col gap-6 justify-center px-16 ">

          <h1 className="text-4xl text-gray-4">Quem são as Doulas?</h1>
          <div className="flex gap-9 w-full max-xl:flex-wrap">

            <Image className="max-xl:w-full max-xl:h-[330px] h-[450px] bg-gray-500 flex flex-col justify-center items-center" alt="" src={doula1}></Image>
            <div className='w-1/3 max-xl:h-auto max-xl:p-2 max-xl:w-full h-[450px] bg-gray-2 flex flex-col justify-center items-center p-12'>
              <p className='text-center'>
                Uma doula é uma profissional que oferece apoio físico, emocional e informativo a mulheres durante a gestação, o parto e o pós-parto.Ajudando as gestantes a se sentirem seguras, empoderadas e bem-informadas ao longo dessas fases da maternidade.
                Embora a doula não seja uma profissional de saúde, como uma enfermeira ou obstetra, ela desempenha um papel essencial ao criar um ambiente de suporte e tranquilidade para a gestante e sua família.
              </p>
            </div>
            <Image className="w-1/3 max-xl:w-full max-xl:h-[330px] h-[450px] bg-gray-500 flex flex-col justify-center items-center" alt="" src={doula3}></Image>

          </div>
        </section>


      </main>

    </div>
  );
}
