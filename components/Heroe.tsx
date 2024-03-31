import { FunctionComponent } from "preact";
import {HeroeType} from "../types.ts"


export const Heroe: FunctionComponent<HeroeType> = (props) => {
    const {name, image, sound} = props;
    return (
        <div >
        <a href={`/buscar/${name}`} class="link">
            <div class="heroe">
                <p>{name}</p>
                <img src={image}></img>
                <audio controls key={sound}>
                    <source src={sound} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                
            </div>
        </a>
        </div>
    )
}