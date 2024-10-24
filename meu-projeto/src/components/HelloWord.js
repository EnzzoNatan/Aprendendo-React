import Frase from './Frase' // Importando o componente "Frase" para dentro deste componente

function HelloWord(){
    
    return (
        <div>
            <Frase/> {/* chamando uma mensagem de outro componente*/}
            <h1>Meu primeiro componente</h1>

            <Frase/> {/* Repetindo o componente mais de uma vez (sem precisar declarar o impor no App.js)*/}
            <Frase/>
            <Frase/>
        </div>
    ) 

}

export default HelloWord

