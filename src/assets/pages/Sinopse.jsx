import ErgoProxyCapa from "/ErgoProxyCapa.jpeg"
import Header from "../components/Header"

export default function Sinopse() {
    return (
        <div>
            <Header />
            <section>
                <h2 className="font-jacquard">Sinopse</h2>
                <p className="">Tudo omeça numa cidade futurista chamada Romdo, construída para a proteção dos cidadãos após o apocalipse ambiental global. Nesta distopia, humanos e AutoReivs (andróides) coexistem pacificamente num ambiente de total controle. Os Autoreivs são separados em 'de companhia' ou 'Entourage' dependendo do seu papel.
                Uma série de assassinatos cometidos por robôs e AutoReivs descontrolados infectados pelo vírus Cogito (que faz com que eles adquiram consciência de si) começa a ameaçar o delicado equilíbrio da ordem social de Romdo. Nos bastidores, o governo vem conduzindo experimentos secretos com uma misteriosa forma de vida humanoide chamada Proxy. Acredita-se que os Proxies descritos como semideuses e Imortais sejam a chave para a sobrevivência da humanidade.</p>
                <img src={ErgoProxyCapa} alt="Capa do anime ErgoProxy."/>
            </section>
        </div>
    )
}