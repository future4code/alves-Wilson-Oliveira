
import { CardStyled } from "../../../styled/StyledGlobal"
import { UseMostraFeed } from "../../../Hooks/UseRequestData"



export const CardPostFedd = (props) => {
    const [data, loading, erro] = UseMostraFeed()
    const dataFilter = data && data.filter((item) => {
        return item.id === props.id
    })
    return <CardStyled>
        {loading && <p>Carregango...</p>}
        {!loading && erro && <p>Ocorreu um erro!!</p>}
        {dataFilter ? <section>
            <h6>Enviado por: {dataFilter[0].username}</h6>
            <h4>{dataFilter[0].title}</h4>
            <p>{dataFilter[0].body}</p>
        </section> : "carregando"}
    </CardStyled>
}