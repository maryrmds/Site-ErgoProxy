import ReL from "/public/ReL.jiff"
import Vicent from "/public/ReL.jiff"
import Pino from "/public/pino.jiff"

export default function Principais() {
    return (
        <div>
            <Header />
            <section>
                <h2 className="">Principais</h2>
                <p>Re-L: Neta do Regente da Cidade, Donov Mayer. Ela trabalha como Inspectora no Escritório de Inteligência, encarregada de investigar uma série de assassinatos brutais cometidos por robôs infectados pelo vírus Cogito.</p>
                <img className="" src={ReL} alt="A protagonista de ErgoProxy, t4endo a pele branca, cabelos pretos e uma marcante sombra azul." />
                <p>Vincent Law: Um imigrante que trabalha para o governo, com a função de caçar e inutilizar robôs infectados.</p>
                <img src={Vicent} alt="Um dos protagonistas de ErgoProxy, tendo pele branca, cabelo castanho e um macacão vermelho." />
                <p>Pino - Criança AutoReiv infectada pelo vírus Cogito, cuidava da filha de Raul Creed e sua esposa antes de adquirir o vírus.</p>
                <img src={Pino} alt="Uma das protagonistas de ErgoProxy, sendo uma criança-robô, tendo ceblo roxo e pele branca." />
            
            </section>
        </div>
    )
}