"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useUser } from "@/context/contextUser";

// Import das imagens 
import LotusIcon from "@/public/icons/utilities/lotus-icon.svg"
import EmailIcon from "@/public/icons/profile-information/grey/email.svg"
import KeyIcon from "@/public/icons/profile-information/grey/key.svg"
import ArrowIcon from "@/public/icons/utilities/arrow-white.svg"
import CircleDegrade from "@/public/icons/utilities/circle-degrade.svg"


 export let minhaVariavel = "";

export default function Login(minhaVariavel) {
  //Variveis
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');
  const [usuario, setUsuario] = useState(null);
  
  // const { setUser } = useUser();

  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false); // Estado do checkbox

  // Alerts (invalidEmail, successLogin, funcaoFututa)
  const invalidDados = () => {
    Swal.fire({
      title: "Login falhou.",
      text: "Não desanime! Confira seus dados e tente outra vez.",
      icon: "warning",
      showConfirmButton: false,
      timer: 2000
    });
  };

  const successLogin = () => {
    Swal.fire({
      icon: "success",
      title: "Bem vindo-a Lotus!",
      showConfirmButton: false,
      timer: 1500
    });
  };

  const registePageRouter = () => {
    router.push('cadastro');
  }


  // Função de login Doula
  const validacaoLoginDoula = async () => {

    if (loading) return; // Impede múltiplos envios durante o carregamento

    setLoading(true); // Inicia o carregamento
    setErro(''); // Reseta qualquer erro anterior

    try {
      // Fazendo requisição para obter todos os doulas cadastrados
      const response = await fetch('https://lotus-back-end.onrender.com/v1/Lotus/cadastro/doula');

      // Verificando se a requisição foi bem-sucedida
      if (!response.ok) {
        throw new Error('Erro ao conectar com o servidor');
      }

      // Convertendo a resposta para JSON
      const data = await response.json();

      // Procurando pelo usuário que possui o email e senha corretos
      const user = data.cadastro.find(
        (user) => user.email_doula === email && user.senha_doula === senha
      );

      if (user) {

        // Caso encontre o usuário, armazena os dados e exibe mensagem
        Swal.fire({
          icon: 'success',
          title: `Bem-vinda, ${user.nome_doula}!`,
          showConfirmButton: false,
          timer: 1500,
        });

        setUsuario(user);
        setErro('');
        router.push('doula/homepage')
      } else {
        // Caso contrário, exibe mensagem de erro
        invalidDados()

        setUsuario(null);
      }
    } catch (err) {
      // Tratamento de erro em caso de falha na requisição
      Swal.fire({
        title: 'Erro 3011',
        text: 'Erro ao tentar conectar com o servidor. Tente novamente mais tarde.',
        icon: 'warning',
        showConfirmButton: false,
        timer: 2000,
      });

      console.error('Erro de requisição:', err);
    } finally {
      setLoading(false); // Fim do carregamento
    }
  }

  // Função de login gestante
  const validacaoLoginGestante = async () => {

    if (loading) return; // Impede múltiplos envios durante o carregamento

    setLoading(true); // Inicia o carregamento
    setErro(''); // Reseta qualquer erro anterior

    try {
      // Fazendo requisição para obter todos os doulas cadastrados
      const response = await fetch('https://lotus-back-end.onrender.com/v1/Lotus/cadastro/gestante');

      // Verificando se a requisição foi bem-sucedida
      if (!response.ok) {
        throw new Error('Erro ao conectar com o servidor');
      }

      // Convertendo a resposta para JSON
      const data = await response.json();

      // Procurando pelo usuário que possui o email e senha corretos
      const user = data.cadastro.find(
        (user) => user.email_gestante === email && user.senha_gestante === senha
      );

      if (user) {
        
        // Caso encontre o usuário, armazena os dados e exibe mensagem
        Swal.fire({
          icon: 'success',
          title: `Bem-vinda, ${user.nome_gestante}!`,
          showConfirmButton: false,
          timer: 1500,
        });

        minhaVariavel = user.nome_gestante;
        setUsuario(user);
        setErro('');
        router.push('gestante/homepage')
      } else {
        // Caso contrário, exibe mensagem de erro
        invalidDados()
        setUsuario(null);
      }
    } catch (err) {
      // Tratamento de erro em caso de falha na requisição
      Swal.fire({
        title: 'Erro 3011',
        text: 'Erro ao tentar conectar com o servidor. Tente novamente mais tarde.',
        icon: 'warning',
        showConfirmButton: false,
        timer: 2000,
      });

      console.error('Erro de requisição:', err);
    } finally {
      setLoading(false); // Fim do carregamento
    }
  }


  // Função que altera o estado do checkbox
  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState);
  };


  // Função que é chamada quando o formulário é submetido
  const validacaoLogin = (event) => {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Verifica o estado do checkbox e chama a função apropriada
    if (isChecked) {
      // Ação quando o checkbox está marcado
      validacaoLoginDoula()
    } else {
      // Ação quando o checkbox está desmarcado
      validacaoLoginGestante()
    }
  };

  return (

    <div className="flex w-screen h-screen p-16 max-sm:p-8 overflow-hidden ">

      <div className="h-full w-2/3 flex flex-col justify-center items-center gap-20 max-xl:w-full">

        <div className="flex flex-col gap-14">

          <div className="flex flex-col gap-4 pb-10">
            <Image className="w-[15%]" alt="Lotus Icon" src={LotusIcon}></Image>

            <h1 className="text-gray-3 text-5xl">Login Lótus</h1>
            <h2 className="text-gray-3">Ainda não possui uma conta? <span onClick={registePageRouter} className="hover:text-pink-2 cursor-pointer transition duration-150 ease-in-out">Clique aqui</span> </h2>
          </div>

          {/* Campos para entrada de valor */}

          <div className="login-container">
            <form
              className="flex text-gray-4 flex-col gap-4 w-[40vw] font-ABeeZee max-xl:w-full"
              onSubmit={validacaoLogin}>

              <div className="flex p-4 rounded-3xl border-[3px] bg-white gap-4">
                <Image className="w-[5%] max-sm:w-50%]" alt="Email Icon" src={EmailIcon}></Image>
                <input
                  type="email"
                  value={email}
                  className="w-full"
                  placeholder="Seu email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="flex p-4 rounded-3xl border-[3px] bg-white gap-4">
                <Image className="w-[5%] max-sm:w-[5%]" alt="Key Icon" src={KeyIcon}></Image>
                <input
                  type="password"
                  value={senha}
                  className="w-full"
                  placeholder="Sua senha"
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </div>


              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="peer hidden"
                />
                <span className="w-5 h-5 border-2  rounded-md flex items-center justify-center peer-checked:bg-pink-degrade-1 peer-checked:border-pink-2">
                  <svg
                    className="w-3 h-3 text-white hidden peer-checked:block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.293 4.293a1 1 0 0 1 0 1.414L8 13.414 4.707 10.121a1 1 0 1 1 1.414-1.414L8 10.586l7.879-7.879a1 1 0 0 1 1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="">Login como Doula</span>
              </label>

              <button
                className="duration-300 bg-gradient-to-r from-pink-3 to-orange-3 w-40 p-4 px-6 items-center justify-between rounded-full text-white flex hover:cursor-pointer hover:scale-95"
                type="submit">

                <p className="text-xl">Entrar</p>
                <Image className="w-[20%]" alt="Arrow Icon" src={ArrowIcon}></Image>

              </button>
            </form>

          </div>

        </div>

      </div>

      <div className="h-full w-1/3 max-xl:w-0 max-xl:hidden">

        <div className="w-full h-1/3 flex align-top justify-end">
          <Image className="max-tcc:bottom-44 w-[500px] h-[500px] relative bottom-24 left-24" alt="Email Icon" src={CircleDegrade}></Image>
        </div>
        <div className="max-tcc:right-28 w-full h-1/3 flex items-center relative">
          <span className="w-[250px] h-[250px] animate-jump-in animate-infinite animate-duration-[6000ms] animate-alternate rounded-full relative bg-pink-3 opacity-40 flex items-center justify-center"></span>
          <Image className="w-[250px] h-[250px] rounded-full relative right-[250px]" alt="Email Icon" src={CircleDegrade}></Image>
        </div>
        <div className="w-full h-1/3 flex justify-end">
          <Image className="w-[450px] h-[450px] rounded-full relative bottom-24 left-24" alt="Email Icon" src={CircleDegrade}></Image>
        </div>

      </div>

    </div>
  );
}

