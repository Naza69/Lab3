import React, { FC, useState } from "react";

const PrimerComponente: FC = () => {
    const [secretNumber, setSecretNumber] = useState<number>(0);
    const [guessInstance, setGuess] = useState<number>(0);
    const [message, setMessage] = useState<string>("");

    let randomNumber = Math.random() * 100;
    randomNumber = Math.trunc(randomNumber)
    const guess = (e: React.FormEvent) => {
        e.preventDefault()
        if(guessInstance < secretNumber) {
            setMessage("Demasiado bajo!")
        } else if (guessInstance > secretNumber){
            setMessage("Demasido alto!")
        } else {
            setMessage("Correcto, ha adivinado el numero")
        }
        
    }

    const handleResetGame = () => {
        setSecretNumber(Math.floor(Math.random()*100)+1)
        setMessage("");

    }

    return (
        <div>
            <form onSubmit={guess}>
                <div>
                    <label htmlFor="numeroRandom">Ingrese el numero: </label>
                    <input name="numeroRandom" type="text" value={guessInstance}/>
                </div>
                <div>
                    El numero es: {randomNumber}
                </div>
                <div>
                    <button id="sendNumber">Comprobar</button>
                </div>
            </form>
        </div>
        

    )



    
}

export default PrimerComponente