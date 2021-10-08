export default function Repeticao01() {
    const listaPessoas = [
        'Robson',
        'João',
        'Vicente',
        'Valéria',
        'Bené'
    ]

    function lacoFor(){
        const itens = []

        for (let i = 0; i < listaPessoas.length; i++) {
            itens.push(<li key={i}>{listaPessoas[i]}</li>)
            
        }

        return itens;
    }

    return lacoFor()

}