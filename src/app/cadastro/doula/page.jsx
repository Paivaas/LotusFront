"use client";

import Image from "next/image";
import Swal from 'sweetalert2';
import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { useRouter } from 'next/navigation';

//Components
import AddPhoto from "@/components/addPhoto";
import Form from "@/components/form";

// Import das imagens 
import LotusIcon from "@/public/icons/utilities/lotus-icon.svg";
import CheckIcon from "@/public/icons/utilities/check-white.svg"
import CircleDegrade from "@/public/icons/utilities/circle-degrade.svg"
import UserCheckIcon from "@/public/icons/profile-information/grey/user-check.svg"
import CakeIcon from "@/public/icons/profile-information/grey/birthday-cake.svg"
import ClipboardIcon from "@/public/icons/profile-information/grey/profession-edit-clipboard.svg"
import ClockIcon from "@/public/icons/profile-information/grey/time.svg"

export default function RegisterDoula() {

  const [cpf, setCpf] = useState('');
  const router = useRouter();

  //funcao que verifica se o CPF é valido
  const isValidCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
  };

  // Função que valida e retorna o modal de cpf invalido
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidCPF(cpf)) {
      Swal.fire({
        icon: "success",
        title: "Cadastro realizado com sucesso!",
        showConfirmButton: false,
        timer: 1500
      });
      router.push('/login');
    } else {
      Swal.fire({
        icon: "warning",
        title: "CPF invalido",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <div className="flex w-screen h-screen max-xl:p-16 max-sm:p-8 overflow-hidden">


      {/* Bolinhas decorativas */}
      <div className="h-full w-1/3 max-xl:w-0 max-xl:hidden relative bottom-16">

        <div className="w-full h-1/3 flex items-start justify-start align-top">
          <Image className="w-[50vw] h-[50vh] relative bottom-24 right-24" alt="Email Icon" src={CircleDegrade}></Image>
        </div>
        <div className="w-full h-1/3 flex items-center justify-end relative left-48 bottom-14">
          <span className="w-[200px] h-[200px] animate-jump-in animate-infinite animate-duration-[6000ms] animate-alternate rounded-full relative bg-pink-3 opacity-40"></span>
          <Image className="w-[200px] h-[200px] rounded-full relative right-[200px]" alt="Email Icon" src={CircleDegrade}></Image>
        </div>
        <div className="w-full h-1/3 flex justify-start items-center">
          <Image className="w-[45vw] h-[45vh] rounded-full relative right-6 bottom-12" alt="Email Icon" src={CircleDegrade}></Image>
        </div>

      </div>

      {/* Codigo da direita (icon, titulo, form e botao) */}
      <div className="px-40 max-lg:p-0 h-full flex flex-col justify-center items-center gap-20 max-xl:w-full">

        <div className="flex flex-col gap-14">

          {/* Header (icon e titulo) */}
          <div className="flex justify-between items-end gap-4 pb-10">
            <div className="">
              <Image className="w-[15%]" alt="Lotus Icon" src={LotusIcon}></Image>
              <h1 className="text-gray-3 text-5xl max-lg:text-3xl">Conte sobre você</h1>
            </div>

            <button type="submit" onClick={handleSubmit} className="w-44 px-8 h-10 bg-gradient-to-r text-white from-pink-3 to-orange-3 rounded-full flex justify-center gap-4 items-center">
              <p className="text-xl max-lg:text-xl">Concluir</p>
              <Image className="w-[25%] max-sm:w-[5vw] " alt="Arrow Icon" src={CheckIcon}></Image>
            </button>
          </div>

          {/* Campos para entrada de valor */}

          <form className="  flex flex-col gap-4 text-gray-4  font-ABeeZee max-xl:w-full max-sm:text-sm">

            <div className="flex flex-col gap-4 ">

              <div className="flex gap-4">
                <AddPhoto></AddPhoto>
                <div className="flex flex-col gap-3">
                  <div className="flex p-4 h-16 rounded-3xl border-[3px] bg-white gap-4 max-sm:gap-2 max-sm:h-16 ">

                    <Image className="w-[5%] max-sm:w-[10%]" alt="Email Icon" src={UserCheckIcon}></Image>
                    <InputMask
                      mask="999.999.999-99"
                      value={cpf}
                      placeholder="CPF"
                      onChange={(e) => setCpf(e.target.value)}>
                      {(inputProps) => <input {...inputProps} type="text" id="cpf" />}
                    </InputMask>
                  </div>

                  <div className="flex p-4 h-16 rounded-3xl items-center border-[3px] bg-white gap-4 max-sm:gap-2 max-sm:h-16 ">

                    <Image className="w-[5%] max-sm:w-[10%] " alt="Clipboard Icon" src={CakeIcon}></Image>
                    <input
                      type="email"
                      placeholder="Idade"
                      className="w-full"
                      aria-label="Seu email"
                      required />

                  </div>

                  <div className="flex p-4 h-16 rounded-3xl border-[3px] bg-white gap-4 max-sm:gap-2 max-sm:h-16 ">

                    <Image className="w-[5%] max-sm:w-[10%]" alt="Clipboard Icon" src={ClockIcon}></Image>
                    <input
                      type="email"
                      placeholder="A quanto tempo você é Doula?"
                      className="w-full"
                      aria-label="Seu email"
                      required />
                  </div>
                </div>

              </div>

              <div className="flex p-4 rounded-3xl border-[3px] bg-white gap-4 max-sm:gap-2 max-sm:h-16 ">

                <Image className="w-[3%] max-sm:w-[10%]" alt="Baby Icon" src={ClipboardIcon}></Image>
                <textarea type="text"
                  placeholder="Faça uma descrição sobre você para que outras mulheres possam te conhecer melhor! Conte sobre sua jornada,  vida e  carreira. ♡ Essa descrição ficará visivel no seu perfil."
                  className="w-full h-[50px]"

                  aria-label="Seu CPF"
                  required
                  rows="4"
                />
              </div>

            </div>

          </form>

        </div>

      </div>

    </div>
  )
}