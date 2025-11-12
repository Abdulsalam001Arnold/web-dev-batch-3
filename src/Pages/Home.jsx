import Button from "../components/button";
import CounterBtn from "../components/CounterBtn";
import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div>
    <div>
    <h1>Hello Vite + React!</h1>
    <ul>
      <li>ijioroijbr</li>
    </ul>

    <Button name='Lanre'/>

    <CounterBtn/>
    </div>

    <Link to={'/about'}>
        Go to About Page
    </Link>
        </div>
    )
};
