"use client"

// Import geral
import Image from "next/image";

// Import das imagens 
import LotusIcon from "@/public/icons/utilities/lotus-icon.svg";


export default function Termos() {

    return (
        <div className="flex flex-col gap-4 justify-center items-center p-12 text-gray-4 ">

            <div className="w-[40vw] flex flex-col gap-6 py-8 max-lg:w-[100vw]">
                <div className="w-full flex justify-center items-center gap-4">
                    <Image className="w-[40px] h-[40px] " alt="Email Icon" src={LotusIcon}></Image>
                    <h1 className=" text-4xl font-ABeeZee text-gray-3">Termos de uso do Aplicativo</h1>
                </div>

                <h2 className="text-center">
                    Bem-vindo ao Lotus Maternidade  Este Aplicativo é operado pela empresa Lotus  e permite a comunicação entre gestantes e doulas para
                    suporte durante a gravidez. Ao usar o Aplicativo, você concorda em cumprir e estar sujeito aos seguintes Termos de Uso. Se você não
                    concorda com estes termos, por favor, não utilize o Aplicativo.
                </h2>


                <div className="pt-4">
                    <h2 className="text-subtitle-desktop font-semibold">1. Aceitação dos Termos</h2>
                    <p className="text-body-desktop pl-2">Ao criar uma conta e utilizar o Aplicativo, você concorda com os Termos de Uso aqui descritos. Se você está usando o Aplicativo
                        em nome de uma organização, você declara ter autoridade para vincular a organização a estes Termos.</p>
                </div>

                <div className="pt-4">
                    <h2 className="font-semibold text-subtitle-desktop">2. Criação de Conta</h2>
                    <p className="text-body-desktop pl-2">Para acessar o Aplicativo, você deve criar uma conta fornecendo informações precisas e completas. Você é responsável por manter
                        a confidencialidade de sua conta e senha, e por todas as atividades que ocorram em sua conta.</p>
                </div>

                <div className="pt-4">
                    <h2 className="font-semibold text-subtitle-desktop">3. Uso do Aplicativo</h2>
                    <p className="text-body-desktop pl-2">Você concorda em utilizar o Aplicativo apenas para fins legais e de acordo com os Termos. Você se compromete a não:</p>
                    <ul className="text-gray-3 pl-4">
                        <li>• Usar o Aplicativo de qualquer forma que viole leis ou regulamentos locais, nacionais ou internacionais.</li>
                        <li>• Usar o Aplicativo para transmitir ou disseminar material que seja ofensivo, difamatório, ou que infrinja direitos de terceiros.</li>
                    </ul>
                </div>

                <div className="pt-4">
                    <h2 className="font-semibold text-subtitle-desktop">4. Conduta do Usuário</h2>
                    <p className="text-body-desktop pl-2">Você concorda em utilizar o Aplicativo de maneira ética e legal. É proibido:</p>
                    <ul className="text-gray-3 pl-4">
                        <li>• Enviar ou transmitir qualquer conteúdo que seja ilegal, ofensivo, ameaçador, abusivo, difamatório ou de outra forma inapropriado.</li>
                        <li>• Interferir com o funcionamento do Aplicativo ou violar a segurança do Aplicativo.</li>
                    </ul>
                </div>

                <div className="pt-4">
                    <h2 className="font-semibold text-subtitle-desktop">5. Privacidade</h2>
                    <p className="text-body-desktop pl-2">Nós coletamos e usamos suas informações pessoais conforme descrito em nossa Política de Privacidade, que é incorporada a estes Termos de
                        Uso por referência.</p>
                </div>

                <div className="pt-4">
                    <h2 className="font-semibold text-subtitle-desktop">6. Limitação de Responsabilidade</h2>
                    <p className="text-body-desktop pl-2">O Aplicativo é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas. Nós não seremos
                        responsáveis por quaisquer danos diretos, indiretos, incidentais ou consequências resultantes do uso ou da incapacidade de usar o Aplicativo.</p>
                </div>

                <div className="pt-4">
                    <h2 className="font-semibold text-subtitle-desktop">7. Modificações nos Termos</h2>
                    <p className="text-body-desktop pl-2">Nós podemos modificar estes Termos de Uso a qualquer momento. Se fizermos alterações, publicaremos a versão revisada no Aplicativo e atualizaremos
                        a data de vigência no topo deste documento. O uso continuado do Aplicativo após tais mudanças constitui sua aceitação dos novos Termos.</p>
                </div>

                <div className="pt-4">
                    <h2 className="font-semibold text-subtitle-desktop">8. Rescisão</h2>
                    <p className="text-body-desktop pl-2">Nós nos reservamos o direito de suspender ou encerrar sua conta e acesso ao Aplicativo a qualquer momento, sem aviso prévio, se acreditarmos que você
                        violou estes Termos de Uso.</p>
                </div>

                <p>Você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do e-mail <span className="text-pink-3">mommycare.lotus@gmail.com</span>.</p>
            </div>

        </div>
    );
}