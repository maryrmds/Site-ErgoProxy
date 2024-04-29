import { Link } from "react-router-dom"
import Principais from "../pages/Principais"

export default function Home() {
    return (
            <header>
                <nav>
                    <h1 className="font-Jacquard">Ergo Proxy</h1>
                        <ul>
                            <li>
                                <Link to={Historia}>Home</Link>
                            </li>
                            <li>
                                <Link to={Sinopse}>Sinopse</Link>
                            </li>
                            <li>
                                <Link to={Principais}>Principais</Link>
                            </li>
                        </ul>
                </nav>
            </header>
    )
}