import Image from "next/image"

export default function InputPublico({
    imagem,
    tipo,
    nomeDoCampo,
    valor = "",
    exibirMensagemValidacao =  false,
    mensagemValidacao = "",
    aoAlterarValor
}){
    return (
        <div className="InputPublicoContainer">
            <div className="inputPublico">
            <Image
            src={imagem}
            alt="imagem do input"
            className="iconeInputPublico"
            width={20}
            height={20}
            
            />
              {/* imagem */}
              {/* campo */}
            <input type={tipo} placeholder={nomeDoCampo} value={valor} onChange={aoAlterarValor}/>
            </div>
            {/* msg validacao */}

            {exibirMensagemValidacao && <p className="mensagemValidacao">{mensagemValidacao}</p>}
        </div>
    )
}