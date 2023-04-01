// Criando função
function Pessoa({name, sexo, idade, foto}) {

    

    return (
        <div>

            <img src={foto} alt={name} />
            <table>
                <caption>Teste Props</caption>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Sexo</th>
                    </tr>
                   
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{idade}</td>
                        <td>{sexo}</td>
                    </tr>
                </tbody>

            </table>



        </div>

    )


}


// Tornando o container global
export default Pessoa