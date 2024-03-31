import { FunctionComponent } from "preact";
import {HeroeType} from "../types.ts"
import { Heroe } from "./Heroe.tsx";

type HeroesType = {
    lista: HeroeType[]
  }
  

export const Heroes: FunctionComponent<HeroesType> = (props) => {
   
    const {lista} = props;
    return (
        <>
            <div class="heroes">
                {lista.map((e:HeroeType) => { return (
                    <Heroe
                        name={e.name}
                        image={e.image}
                        sound={e.sound}
                        />

                )
                })}
            </div>
        
        </>
    )
}