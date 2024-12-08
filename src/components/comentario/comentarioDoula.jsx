"use client"

import { useState } from "react";
import Image from "next/image";
import React, { useEffect } from "react";
import Swal from 'sweetalert2';
import Loading from '@/components/loading';
import Trash from '@/public/icons/utilities/trash-white.svg'
import { DegradeOrange, DegradePink, DegradeRed } from '@/components/degrade';
import DoulaInfo from '@/components/comentario/doulainfo'




const Comentarios = () => {

    const [gestantes, setGestantes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [produto, setProduto] = useState('');
    const [gestanteId, setGestanteId] = useState('');
    const [responseMessage, setResponseMessage] = useState(null);
    const [filteredData, setFilteredData] = useState([]);

    const [dadosEnxoval, setDadosEnxoval] = useState([]);
    const [novoProduto, setNovoProduto] = useState("");
    const [idGestante, setIdGestante] = useState("");
    const baseURL = "https://lotus-back-end.onrender.com/v1/Lotus/enxoval/";


    // Função para buscar todos os dados
    const fetchDados = async () => {
        try {
            const response = await fetch(baseURL);
            const data = await response.json();

            // Filtrar produtos com id_gestante_usuario_enxoval === 8
            const filtrados = data.enxovalDados.filter(
                (produto) => produto.id_gestante_usuario_enxoval === 8
            );

            setDadosEnxoval(filtrados);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };

    // Função para adicionar um novo produto com SweetAlert
    const adicionarProduto = async () => {
        // Exibe o SweetAlert para digitar o nome do produto
        const { value: text } = await Swal.fire({
            input: "textarea",
            inputPlaceholder: "Digite o seu comentario aqui...",
            showCancelButton: true,
            confirmButtonColor: '#FFAEBF',
        });

        if (text) {
            // O ID da gestante será sempre 8
            const idGestante = 8;

            // Realiza o POST para adicionar o novo produto com o ID fixo
            try {
                const response = await fetch(baseURL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        produtos_enxoval: text,
                        id_gestante_usuario_enxoval: idGestante
                    })
                });

                if (response.ok) {
                    Swal.fire({
                        title: "Comentário enviado.",
                        showConfirmButton: false,
                        timer: 1500,
                        icon: "success"
                    });

                  //window.location.reload();

                    // setTimeout(() => {
                    //     window.location.reload(); // Força o reload após o delay
                    // }, 2000);

                } else {
                    Swal.fire("Erro enviar seu comentário...");
                }
            } catch (error) {
                console.error("Erro ao adicionar comentário:", error);
            }
        }
    };

    // Função para deletar um produto
    const excluirProduto = async (id) => {
        try {
            const response = await fetch(`${baseURL}${id}`, {
                method: "DELETE",
            });
            if (response.ok) {

                fetchDados(); // Atualizar a lista

                Swal.fire({
                    title: "Seu comentário esta sendo excluído...",
                    showConfirmButton: false,
                    timer: 1500,
                    icon: "success"
                });

                // setTimeout(() => {
                //     window.location.reload(); // Força o reload após o delay
                // }, 2000);

            } else {
                Swal.fire("Erro ao excluir o produto!");
            }
        } catch (error) {
            Swal.fire("Erro ao excluir o produto:", error);
        }
    };




    // get resposta
    const fetchEnxoval = async () => {
        try {
            const response = await fetch('https://lotus-back-end.onrender.com/v1/Lotus/enxoval/');
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            const data = await response.json();
            // Filtra os itens para exibir apenas os com id_gestante_usuario_enxoval = 9
            const filtered = data.enxovalDados.filter(
                (item) => item.id_gestante_usuario_enxoval === 9
            );
            setFilteredData(filtered);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    // Função para adicionar um nova reposta com SweetAlert
    const resposta = async () => {
        // Exibe o SweetAlert para digitar o nome do produto
        const { value: text } = await Swal.fire({
            input: "textarea",
            inputPlaceholder: "Digite a sua resposta aqui...",
            showCancelButton: true,
            confirmButtonColor: '#FFAEBF',
        });

        if (text) {
            // O ID da gestante será sempre 8
            const idGestante = 8;

            // Realiza o POST para adicionar o novo produto com o ID fixo
            try {
                const response = await fetch(baseURL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        produtos_enxoval: text,
                        id_gestante_usuario_enxoval: idGestante
                    })
                });

                if (response.ok) {


                    fetchEnxoval(); // Atualizar a lista de produtos


                    Swal.fire({
                        title: "Resposta enviada.",
                        showConfirmButton: false,
                        timer: 1500,
                        icon: "success"
                    });

                    // setTimeout(() => {
                    //     window.location.reload(); // Força o reload após o delay
                    // }, 2000);


                } else {
                    Swal.fire("Erro enviar seu comentário...");
                }
            } catch (error) {
                Swal.fire("Erro ao adicionar comentário:", error);
            }
        }
    };


    // post resposta
    const handlePost = async () => {
        const { value: produto } = await Swal.fire({
            input: 'textarea',
            inputPlaceholder: 'Digite a sua resposta aqui...',
            showCancelButton: true,
            confirmButtonColor: '#FFAEBF',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Enviar',
        });

        if (produto) {
            const data = {
                produtos_enxoval: produto,
                id_gestante_usuario_enxoval: 9, // ID fixo da gestante
            };

            try {
                const response = await fetch('https://lotus-back-end.onrender.com/v1/Lotus/enxoval/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }

                fetchEnxoval()

                Swal.fire({
                    title: "Comentário enviado.",
                    showConfirmButton: false,
                    timer: 1500,
                    icon: "success"
                });
                
                // setTimeout(() => {
                //     window.location.reload(); // Força o reload após o delay
                // }, 2000);

            } catch (err) {
                Swal.fire({
                    title: 'Erro',
                    text: `Não foi possível adicionar o produto: ${err.message}`,
                    icon: 'error',
                });
            }
        } else {
            Swal.fire('Operação cancelada!', '', 'info');
        }
    };

    // delete resposta
    const handleDelete = async (idEnxoval) => {

        try {
            const response = await fetch(`https://lotus-back-end.onrender.com/v1/Lotus/enxoval/${idEnxoval}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }


            // Remove o produto da lista após excluir
            setFilteredData((prevData) => prevData.filter(item => item.id_enxoval !== idEnxoval));
            Swal.fire({
                title: "Seu comentário esta sendo excluído...",
                showConfirmButton: false,
                timer: 1500,
                icon: "success"
            });

            fetchEnxoval()

            // setTimeout(() => {
            //     window.location.reload(); // Força o reload após o delay
            // }, 2000);


        } catch (err) {
            setError(err.message);
            Swal.fire({
                title: 'Erro',
                text: `Não foi possível excluir o produto: ${err.message}`,
                icon: 'error',
            });
        } finally {
            setLoading(false);
        }

    };


    useEffect(() => {

        fetchEnxoval()

        fetchDados()
        // Função para fazer o GET
        const fetchGestantes = async () => {
            try {
                const response = await fetch('https://lotus-back-end.onrender.com/v1/Lotus/cadastro/gestante');
                if (!response.ok) {
                    throw new Error('Erro ao buscar gestantes');
                }
                const data = await response.json();
                // Filtra apenas os dados onde id_usuario_gestante = 8
                const gestantesFiltradas = data.cadastro.filter(gestante => gestante.id_usuario_gestante === 6);
                setGestantes(gestantesFiltradas); // Atualiza o estado com os dados filtrados
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchGestantes();
    }, []); // O array vazio significa que a requisição será feita apenas uma vez, na montagem do componente

    if (loading) {
        return <Loading></Loading>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }


    return (
        <div className="animate-flip-up animate-once animate-duration-500 animate-ease-linear    h-full w-full flex flex-col rounded-3xl  drop-shadow-lg bg-white">

            <div className="px-14 py-6 flex flex-col items-center justify-center">
                <div className="max-2xl:flex-col max-2xl:py-3 text-gray-4 w-full h-16 font-ABeeZee border-b-4 border-zinc-200 text-2xl flex items-center justify-between mb-6">
                    <h1>Comentários</h1>
                    <button
                        onClick={adicionarProduto}
                        className="bg-pink-2 text-white font-ABeeZee rounded-full text-sm px-4 py-2 hover:bg-pink-3"

                    >Adicionar comentário

                    </button>
                </div>


                <div className="  rounded-lg w-full">


                    <ul className="flex flex-col gap-4">
                        {dadosEnxoval.length > 0 ? (
                            dadosEnxoval.map((produto) => (

                                <li className="animate-delay-100 animate-fade-up animate-once animate-duration-[400ms] animate-ease-linear flex flex-col bg-gray-2 p-2 rounded-lg w-full" key={produto.id_enxoval}>
                                    {gestantes.map((gestante) => (
                                        <li className="flex items-center gap-2  font-bold" key={gestante.id_usuario_gestante}>
                                            <img className="h-10 w-10 rounded-full" src={gestante.foto_gestante} alt={`${gestante.nome_gestante} foto`} />
                                            <h3>{gestante.nome_gestante} {gestante.sobrenome_gestante}</h3>
                                        </li>
                                    ))}
                                    {produto.produtos_enxoval}
                                    <div className="flex gap-2">

                                        <button className="px-[8px] bg-orange-2 rounded-lg mt-2 text-white" onClick={handlePost}>
                                            responder
                                        </button>
                                        <button className="px-[8px] bg-red-degrade-1 rounded-lg mt-2 text-white" onClick={() => excluirProduto(produto.id_enxoval)}>

                                            Excluir
                                        </button>
                                    </div>


                                </li>
                            ))
                        ) : (
                            <li>Ainda não há comentários por aqui...</li>
                        )}

                        <div className="w-full">
                            {filteredData.length > 0 ? (
                                <ul className="flex flex-col gap-2">
                                    {filteredData.map((item) => (
                                        <li className="animate-delay-300 animate-fade-up animate-once animate-duration-[400ms] animate-ease-linear bg-pink-degrade-1 ml-12 p-2 rounded-lg flex flex-col" key={item.id_enxoval}>

                                            <DoulaInfo></DoulaInfo>
                                            {item.produtos_enxoval}
                                            <button className="px-[8px] w-16 bg-red-degrade-1 rounded-lg mt-2 text-white" onClick={() => handleDelete(item.id_enxoval)}>Excluir</button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p></p>
                            )}
                        </div>
                    </ul>
                </div>








            </div>

        </div>
    );
};

export default Comentarios;