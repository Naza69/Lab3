import React from 'react'
import {FC} from "react"

interface IComponenteReutilizable {
    color:string
}

export const ComponenteReutulizable: FC<IComponenteReutilizable> = ({color}) => {
    return (
        <div style={{
        
        backgroundColor: color,
        margin: "2rem",

        }}>ComponenteReutulizable</div>
    )
}
