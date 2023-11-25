// reference global context to access global var
import { useContext } from "react";
import { CounterContext } from "../../App";

function Footer() {
    // ref to global var
    const { sessionCounter } = useContext(CounterContext);

    return (
        <div className="bg-dark text-center text-white fixed-bottom p-2">
            <p>&copy; 2023 | COMP2112 | First React App</p>
        </div>
    );
}

export default Footer;