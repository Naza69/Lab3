import { FC } from "react"
import { IHeroes } from "../../../Types/THeroes"
import styles from './ListHeroes.module.css'
import CardHero from "../CardHero/CardHero"


interface IListHeroes{
    heroes: IHeroes[],
    title : string
}
const ListHeroes : FC<IListHeroes>= ({heroes,title}) =>{
    return(
        <div className={styles.containerPrincipalList}>
            <div className={styles.containerTitle}>
                <h2>{title}</h2>
            </div>

            <div className={styles.containerList}>
                {
                    heroes.map((hero)=>(
                        <CardHero hero={hero} key={hero.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ListHeroes