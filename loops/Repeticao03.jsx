import listaInstrumentos from "../data/listaInstrumentos";
import lista from "../data/listaInstrumentos"

export default function Repeticao03(){
    const bordaTabela = {
        border: "1px solid #000"
    }
    function renderRows(){
        return listaInstrumentos.map(instrumento => {
            return (
                <tr key={instrumento.id}>
                    <td style={bordaTabela}>{instrumento.id}</td>
                    <td style={bordaTabela}>{instrumento.nome}</td>
                    <td style={bordaTabela}>{instrumento.preco}</td>
                </tr>
            );
        })
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>CÓDIGO DO PRODUTO</th>
                    <th>INSTRUMENTO</th>
                    <th>PREÇO</th>
                </tr>
            </thead>          
                { renderRows() }            
        </table>
    );
}