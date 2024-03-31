import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { stripSuffix } from "$std/path/_common/basename.ts";
import {HeroeType} from "../types.ts"
import {Heroe} from "../components/Heroe.tsx"

export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown,string>) => {
        const u = new URL(ctx.url)
        const nombre = u.searchParams.get("nombre")

      
      const url = await axios.get(`https://supermondongo.deno.dev/${nombre}`)
      if(!url){
        return new Response("Error fetching heroes", {status:500})
      }

      //const foundHero = url.data.find((hero) => hero.name.toLowerCase() === miHeroe.toLowerCase());

      return ctx.render(url.data[0]);
  
    }
  }

const Page = (props: PageProps) => {

    return(
      <body class="personaje">
        <div class="form">
            <form class="formulario">
            <h2> que heroe macizo quieres buscar</h2>
                <input type="text" name="nombre" placeholder="name"></input>
                <button type="submit"> buscar </button>
            </form>
            
            

        </div>
        <div >
            {props.data !== undefined && <Heroe name={props.data.name} image={props.data.image} sound={props.data.sound}/>}
        </div>
      </body>
        
        
    )
}

export default Page;
