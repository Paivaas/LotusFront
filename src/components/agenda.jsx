"use client"

import { useState } from "react";
import React, { useEffect } from "react";
import Swal from 'sweetalert2';
import Loading from '@/components/loading';
import { DegradeOrange, DegradePink, DegradeRed } from '@/components/degrade';
import Calendario2 from '@/components/calendario2'


// Calendário
import Calendar from "react-calendar";
import '@/../src/styles/Calendar.css';
import { format } from 'date-fns';

const Agenda = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false); // Estado para gerenciar o carregamento

    const showAlert = async () => {
        const { value: formValues } = await Swal.fire({
            title: "Adicionar evento",
            html: `
                <input id="swal-input1" class="swal2-input" placeholder="Título do evento">
                <input id="swal-input2" class="swal2-input" placeholder="Descrição do evento">
                <input id="swal-input3" class="swal2-input" placeholder="Data (YYYY-MM-DD)">
                <input id="swal-input4" class="swal2-input" placeholder="Horário (HH:mm)">
                <input id="swal-input5" class="swal2-input" placeholder="ID do usuário (obrigatório)">
            `,
            focusConfirm: false,
            preConfirm: () => {
                const title = document.getElementById("swal-input1").value;
                const description = document.getElementById("swal-input2").value;
                const date = document.getElementById("swal-input3").value;
                const time = document.getElementById("swal-input4").value;
                const userId = document.getElementById("swal-input5").value;

                if (!title || !description || !date || !time || !userId) {
                    Swal.showValidationMessage("Todos os campos são obrigatórios!");
                    return false;
                }

                const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Valida YYYY-MM-DD
                const timeRegex = /^\d{2}:\d{2}(:\d{2})?$/; // Valida HH:mm ou HH:mm:ss

                if (!dateRegex.test(date)) {
                    Swal.showValidationMessage("A data deve estar no formato YYYY-MM-DD!");
                    return false;
                }

                if (!timeRegex.test(time)) {
                    Swal.showValidationMessage("O horário deve estar no formato HH:mm ou HH:mm:ss!");
                    return false;
                }

                return { title, description, date, time, userId: parseInt(userId, 10) };
            },
        });

        if (formValues) {
            try {
                const response = await fetch("https://lotus-back-end.onrender.com/v1/Lotus/agenda", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        descricao_calendario: formValues.description,
                        data_calendario: formValues.date,
                        horario_calendario: formValues.time,
                        usuario_calendario_id: formValues.userId,
                    }),
                });

                const data = await response.json();

                if (response.ok) {
                    Swal.fire("Sucesso!", "Evento adicionado com sucesso.", "success");
                    setItems((prevItems) => [...prevItems, formValues]);
                } else {
                    Swal.fire("Erro!", data.message || "Erro ao salvar o evento.", "error");
                }
            } catch (error) {
                Swal.fire("Erro!", "Não foi possível conectar ao servidor.", "error");
            }
        }
    };


    return (
        <div className=" animate-flip-up animate-once animate-duration-500 animate-ease-linear  h-full  flex flex-col rounded-3xl drop-shadow-lg bg-white">

            <DegradeOrange></DegradeOrange>

            <div className="px-14 py-6 flex flex-col items-center justify-center">
                <div className="text-gray-4 w-full h-16 font-ABeeZee border-b-4 border-zinc-200 text-2xl flex items-center justify-between mb-6">
                    <h1>Agenda</h1>
                    {/* <button
                        onClick={showAlert}
                        className="bg-orange-2 text-white font-ABeeZee rounded-full text-sm px-4 py-2 hover:bg-orange-3"
                        disabled={loading} // Desabilita durante o carregamento
                    >
                        {loading ? "Carregando..." : "Adicionar evento +"}
                    </button> */}
                </div>

                <div className="text-gray-3">
                    <Calendario2></Calendario2>
                </div>

                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <strong>{item.title}</strong>: {item.description} em {item.date} às {item.time}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Agenda;