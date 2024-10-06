import { FC } from "react"

interface IPropsMiPrimerComponente {
    text: string
    color: string
    
}

export const MiPrimerComponente: FC<IPropsMiPrimerComponente> = ({text, color}) => {
    return (
        <div style={{
            color: `${color}`,
            
        }}>
            <p></p>
            {text}
            
        </div>

    )
}
