import Item from "./Item"

function List(){
    return(
        <div>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat" ano_lancamento={1999} /> 
                <Item marca="Renault" ano_lancamento={2021}/>    
                <Item marca="1" ano_lancamento="Bia" />
            </ul>
        </div>
    )
}

export default List