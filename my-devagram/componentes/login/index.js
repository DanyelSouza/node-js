import InputPublico from "../inputPublico";
import Botao from "../botao"
import Image from "next/image";


import imagemEnvelope from "../../public/imagens/envelope.svg"
import imagemChave from "../../public/imagens/chave-senha.svg"
import logo from "../../public/imagens/logo.svg"
import Link from "next/link";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
  


    return (
        <section className={`paginaLogin paginaPublica`}>
            <div className="logoContainer">
              <Image src={logo} alt="Logotipo devagram" layout="fill"/>
            </div>
            <div className="conteudoPaginaPublica">
                <form>
                    <InputPublico imagem={imagemEnvelope} nomeDoCampo="E-mail" tipo="email"
                        aoAlterarValor={(e) => setEmail(e.target.value)} 
                        valor={email}
                        
                        />

                    <InputPublico imagem={imagemChave} nomeDoCampo="Senha" tipo="password"
                        aoAlterarValor={(e) => setSenha(e.target.value)} 
                        valor={senha}
                        
                        />
                    {/*<input type={'email'} placeholder="E-mail"/>*/}

                    <Botao texto={"Login"} tipo="submit" disabilitado={false}/>
                </form>

                <div className="rodapePaginaPublica">
                    <p>Não possui uma conta ?</p>
                    <Link href="/cadastro">Faça seu cadastro agora</Link>
                </div>

            </div>
        </section>
    )
}