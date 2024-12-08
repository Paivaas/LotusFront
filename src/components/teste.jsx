
import Icon from "@/public/icons/utilities/lotus-icon.svg";
import Image from "next/image";

export default function Flor({ imagem }) {

    return (
        <div className="w-screen h-screen flex items-center justify-center ">

            <div className="animate-rotate-y animate-infinite animate-duration-[2000ms] animate-ease-in">
                <Image className="w-[100px] animate-rotate-y animate-infinite animate-duration-[3000ms] animate-ease-in" alt="Arrow Icon" src={Icon}></Image>
            </div>
            <h1 className="font-ABeeZee">Fazendo Log out da conta...</h1>
        </div>
    )
}