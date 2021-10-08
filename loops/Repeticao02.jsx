export default function Repeticao02() {
    const listaInstrumentos = [
        "Violino",
        "Viola",
        "Cello",
        "Baixo",
        "Oboé",
    ];

    function mapArrowFunction() {
        return listaInstrumentos.map((instrumento, i)=> <li key={i}>{instrumento}</li>)
    }

    return mapArrowFunction()
}