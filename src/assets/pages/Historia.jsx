import ErgoProxyCapa from "/public/ErgoProxyCapa.jiff"

export default function Historia() {
    return (
        <div>
            <Header />
            <section>
                <h2 className="">História</h2>
                <p className="">A história começa numa cidade futurista chamada Romdo, construída para a proteção dos cidadãos após o apocalipse ambiental global. Nesta distopia, humanos e AutoReivs (andróides) coexistem pacificamente num ambiente de total controle. Os Autoreivs são separados em 'de companhia' ou 'Entourage' dependendo do seu papel.</p>
                <img src={ErgoProxyCapa} alt="Capa do anime ErgoProxy."/>
            </section>
        </div>
    )
}