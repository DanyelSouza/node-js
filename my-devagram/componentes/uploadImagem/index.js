import { useRef } from "react"
import { useEffect } from "react"

export function UploadImagem({
    className = '',
    setImagem,
    imagemPreview,
    imagemPreviewClassName = '',
    aoSetarAreferencia
}) {

    const referenciaInput = useRef(null)

    useEffect(() => {
        if (!aoSetarAreferencia) {
            return
        }
        aoSetarAreferencia(referenciaInput?.current)
    }, [referenciaInput?.current])

    const abrirSeletorArquivos = () => {
        referenciaInput?.current?.click()
        //console.log('abrirrrrrr')
    }

    const aoAlterarImagem = () => {

        console.log('aoAlterarImagem')

        if (!referenciaInput?.current?.files?.length) {
            return
        }

        const arquivo = referenciaInput?.current?.files[0]
        const fileReader = new FileReader()

        fileReader.readAsDataURL(arquivo)
        fileReader.onloadend = () => {
            setImagem({
                preview: fileReader.result,
                arquivo
            })
            //console.log(fileReader.result)
        }
    }
    return (
        <div className={`uploadImagemContainer ${className}`} onClick={abrirSeletorArquivos}>
            <button>abrir seletor de arquivos</button>
            {imagemPreview && (
                <div className="imagemPreviewContainer">

                    <img src={imagemPreview}
                        alt='Imagem Preview'
                        className={imagemPreviewClassName} />

                </div>
            )}

            <input type='file' className='oculto' accept="image/*"
                ref={referenciaInput} onChange={aoAlterarImagem}
            />
        </div>
    )
}