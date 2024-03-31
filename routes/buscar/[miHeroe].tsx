import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import {Heroes} from "../../components/Heroes.tsx"
import {HeroeType} from "../../types.ts"

export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown,HeroeType>) => {
        try{
            const { miHeroe } = ctx.params;
            
            const url = await axios.get<HeroeType[]>(`https://supermondongo.deno.dev/${miHeroe}`);
            
            if(url.status !== 200) {
                throw new Error("Failed to fetch data");
            }
            
            const foundHero = url.data.find((hero) => hero.name.toLowerCase() === miHeroe.toLowerCase());

            if (!foundHero) {
                throw new Error(`No se encontró ningún héroe con el nombre "${miHeroe}"`);
            }

            return ctx.render(foundHero);
        }catch(err){
            throw new Error(err);
        }
    }
}


const Page = (props: PageProps<HeroeType>) => {

    return (
        <body class="personaje">
            <div class="centrar">
                <h1> ¡TU HEROE SELECCIONADO! </h1>
                <Heroes lista={[props.data]} />
            </div>
            
            
        </body>
    )

}

export default Page;