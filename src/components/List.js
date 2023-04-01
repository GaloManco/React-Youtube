// Importando componente item
import Items from "./Items";

// Criando componente
function List(){
    return (
        < >
            <ul className="Aulas">
                <h4>Produtos</h4>
                <Items produto="Macarão"/>
                <Items produto="Feijão"/>
                <Items produto="Arroz"/>
                <Items produto="Milho"/>


            </ul>
        </>
    )
}



// Exportando componente
export default List