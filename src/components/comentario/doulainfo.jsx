import React, { useEffect, useState } from 'react';

const DoulaInfo = () => {
  const [doula, setDoula] = useState(null);
  const fallbackImage = 'https://cdn-icons-png.flaticon.com/512/3546/3546617.png';

  useEffect(() => {
    // Função para buscar dados
    const fetchDoulaData = async () => {
      try {
        const response = await fetch('https://lotus-back-end.onrender.com/v1/Lotus/cadastro/doula');
        const data = await response.json();
        
        // Filtrando o doula com id_usuario_doula = 4
        const doulaInfo = data.cadastro.find(d => d.id_usuario_doula === 3);
        
        if (doulaInfo) {
          setDoula(doulaInfo);
        }
      } catch (error) {
        console.error('Erro ao buscar dados da doula:', error);
      }
    };

    fetchDoulaData();
  }, []);

  // Exibindo informações da doula
  return (
    <div>
      {doula ? (
        <div className='flex items-center gap-2 font-bold'>
          <img 
            src="https://st2.depositphotos.com/4994741/11321/i/450/depositphotos_113216666-stock-photo-woman-portrait-on-the-street.jpg"
            className="h-10 w-10 rounded-full" 
            alt={`${doula.nome_doula} foto`}  />
          <h2>{doula.nome_doula} {doula.sobrenome_doula}</h2>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default DoulaInfo;
