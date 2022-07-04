import { useState } from "react"
import React from "react"


function Post(props) {
  const [curtido, setcurtido] = useState(false)
  const [numeroCurtidas, setnumeroCurtidas] = useState(0)
  const [comentando, setcomentando] = useState(false)
  const [numeroComentarios, setnumeroComentarios] = useState(0)
  const [comentarios, setcomentarios] = useState([])
  const [inputValue, setinputValue] = useState("")



  const onClickCurtida = () => {
  if(curtido){
    setcurtido(!curtido)
    setnumeroCurtidas(numeroCurtidas -1)
  }else{
    setcurtido(!curtido)
  setnumeroCurtidas(numeroCurtidas +1)}
  };

  // Passo7
  const onClickComentario = () => {
 setcomentando(!comentando)
  };

  // Passo7
  const onChangeComentario = (event) => {
   setinputValue(event.target.value)
   
  };

  // Passo7
  const enviarComentario = (comentario) => {
  const listaDeComentarios=[...comentarios,comentario]
  setcomentarios(listaDeComentarios)
  setcomentando(false)
  setinputValue("")
  setnumeroComentarios(numeroComentarios +1)
  console.log(comentario)
  }

  const caixaDeComentario = comentando ? (
    <>
      <label htmlFor={"comentario"} >Comente: </label>
      {/* Passo4 */}
      <input
        id={"comentario"}
        value={inputValue}
        onChange={onChangeComentario}
      />
      {/* Passo4 */}
      <button onClick={()=>enviarComentario(inputValue)} >Enviar</button>
    </>
  ) : (
    comentarios.map((comentario, index) => {
      return (
        <div key={index}>
          <p>{comentario}</p>
        </div>
      )
    })
  );

  return (
    <main>
      <header>
        <figure>
          {/* Passo3 */}
          <img src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <span>{props.nomeUsuario} </span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          {/* Passo3 */}
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          {/* Passo6 */}
          <span>Número de curtidas: {numeroCurtidas}</span>
          {/* Passo4 */}
          <button  onClick={onClickCurtida}>
            {/* Passo6 */}
            {curtido ? "Dislike" : "Like"}
          </button >
        </section>
        <section>
          {/* Passo6 */}
          <span>Número de comentários: {numeroComentarios}</span>
          {/* Passo4 */}
          <button onClick={ onClickComentario} >
            {/* Passo6 */}
            {comentando ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};

export default Post;