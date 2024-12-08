"use client";
import React, { useEffect, useState } from "react";

// Import dos componentes do nav
import { PerfilDoulaAtivo } from "@/components/nav/perfil";
import { Logout } from "@/components/nav/logout";
import { NavTop } from "@/components/nav/navTop";
import { DegradeOrange } from "@/components/degrade";
import { HomeDoula } from "@/components/nav/home";
import { ConteudosDoula } from "@/components/nav/conteudos";
import Loading from "@/components/loading"; // Certifique-se de importar corretamente

const BASE_URL = "https://lotus-back-end.onrender.com/v1/Lotus/cadastro/doula";

export default function Perfil() {
  const [doula, setDoula] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento
  const [formData, setFormData] = useState({
    nome_doula: "",
    sobrenome_doula: "",
    email_doula: "",
    senha_doula: "",
    cpf_doula: "",
    sobremim_doula: "",
    tempo_de_atuacao: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        const doulaEncontrada = data.cadastro.find((d) => d.id_usuario_doula === 3);
        setDoula(doulaEncontrada);
        setFormData({
          nome_doula: doulaEncontrada.nome_doula,
          sobrenome_doula: doulaEncontrada.sobrenome_doula,
          email_doula: doulaEncontrada.email_doula,
          senha_doula: doulaEncontrada.senha_doula,
          cpf_doula: doulaEncontrada.cpf_doula,
          sobremim_doula: doulaEncontrada.sobremim_doula,
          tempo_de_atuacao: doulaEncontrada.tempo_de_atuacao,
        });
      })
      .catch((error) => console.error("Erro ao obter doulas", error))
      .finally(() => setIsLoading(false)); // Define isLoading como falso
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedImage(file);
  };

  const handleImageError = (e) => {
    e.target.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysHIDmzqCkdLOCk-b5BZeqNJyQHjYt7BucxT_NidPZCNn72FQ9S-6knpuz86ggey-ArY&usqp=CAU";
  };

  return (
    <div className="h-screen w-screen flex p-6 gap-4 overflow-hidden max-md:flex-col">
      <nav className="flex flex-col justify-between text-gray-3 max-md:flex-col">
        <div className="flex flex-col gap-4">
          <NavTop />
          <ul className="flex flex-col gap-2 max-md:flex-wrap mt-8">
            <HomeDoula />
            <ConteudosDoula />
            <PerfilDoulaAtivo />
          </ul>
        </div>
        <Logout />
      </nav>
      <main className="w-full h-full bg-gray-1 rounded-2xl">
        <DegradeOrange />
        <section className="w-full h-full flex justify-center items-center">

          {isLoading ? (
            <Loading /> // Mostra o componente de loading enquanto os dados estão sendo carregados
          ) : doula ? (
            <div className=" relative bottom-80">
              <div className="flex flex-col items-center gap-4 relative md:h-48" style={{ marginTop: '-63px' }}>
                <div className="relative">
                  <div className="bg-white h-48 w-48 lg:h-80 lg:w-80 rounded-full flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-40 w-40 lg:h-64 lg:w-64 rounded-full flex items-center justify-center bg-gray-1">
                        <img
                          src="https://st2.depositphotos.com/4994741/11321/i/450/depositphotos_113216666-stock-photo-woman-portrait-on-the-street.jpg"
                          alt="Perfil"
                          className="h-full w-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-2 max-md:h-4">
                  <h1 className="text-[30px] flex text-gray-4 font-ABeeZee z-40  font-thin max-md:text-[22px]">
                    {doula.nome_doula}
                    <span className='w-3'></span>
                    {doula.sobrenome_doula}
                  </h1>
                </div>

                {/* DIV DE OPÇÕES PRINCIPAIS DO PERFIL */}
                <div className="bg-gray-100 w-[800px] h-auto flex flex-col justify-around items-start mx-auto p-4 rounded-[13px] max-md:w-[80vw]">

                  {/* Linha com Profissão e Data de Nascimento */}
                  <div className="flex gap-4 w-full mb-4 max-md:flex-col max-md:gap-2">

                    {/* Profissão */}
                    <div className="flex items-center gap-4 bg-white p-4 rounded-[12px] border w-2/3 h-12 max-md:w-full">
                      {/* <Image src={editprofissão} alt="Profissão" className="w-7 h-7" /> */}
                      <div className="flex gap-2">
                        <span className="text-gray-500">Email:</span>
                       {doula.email_doula}
                      </div>
                    </div>

                    {/* Data de Nascimento */}
                    <div className="flex items-center gap-4 bg-white p-4 rounded-[12px] border w-1/3 h-12 max-md:w-full">
                      {/* <Image src={cake} alt="Data de Nascimento" className="w-6 h-7" /> */}
                      <div className="flex gap-2">
                        <span className="text-gray-500">CPF:</span>
                        {doula.cpf_doula}
                      </div>
                    </div>

                  </div>

                  {/* Nome do Bebê */}
                  <div className="flex items-center gap-4 bg-white p-4 rounded-[12px] border max-md:mb-2  w-full mb-4">
                    {/* <Image src={baby} alt="Nome do Bebê" className="w-7 h-7" /> */}
                    <div className="flex flex-col gap-2 items-center">
                      <span className="text-gray-400 font-ABeeZee">Sobre mim:</span>
                      <span className="text-gray-500">
                         Sou uma doula dedicada e apaixonada por apoiar gestantes e suas
                         famílias em uma das fases mais transformadoras da vida. Ao longo
                         da minha carreira, o 
                         parto e o pós-parto, garantindo que elas se sintam empoderadas e
                         preparadas para cada etapa dessa jornada.

                         Acredito que cada mulher tem o direito de viver uma experiência de 
                         parto respeitosa, segura e única, independentemente do tipo de parto
                          que escolha. Meu papel é ser uma presença constante e confiável.
                      </span>
                    </div>
                  </div>

                  {/* Data Prevista para o Parto */}
                  <div className="flex items-center gap-4 bg-white p-4 rounded-[12px] border w-full h-12">
                    {/* <Image src={calendar} alt="Data Prevista para o Parto" className="w-7 h-7" /> */}
                    <div className="flex gap-2">
                      <span className="text-gray-400 font-ABeeZee">Tempo de atuação:</span>
                      <span className="text-gray-500">{doula.tempo_de_atuacao}</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ) : (
            <p>Erro ao carregar as informações da doula.</p>
          )}
        </section>
      </main>
    </div>
  );
}
