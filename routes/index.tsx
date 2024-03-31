import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"
import {Heroes} from "../components/Heroes.tsx"
import { HeroeType } from "../types.ts";



export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext) => {
    /* CON FETCH
    const url = await fetch(`https://supermondongo.deno.dev/`)
    const json = await url.json()
    return ctx.render(json)
    */

    //CON AXIOS
    const url = await axios.get(`https://supermondongo.deno.dev/`)
    if(!url){
      return new Response("Error fetching heroes", {status:500})
    }
    return ctx.render(url.data);

  }
}



export default function Home( props:PageProps) {
  
  return (
    <>
      <a class="eliminar" href="/deleteHeroe"> eliminar heroe </a>
      <div>
          <Heroes  lista ={ props.data} />
      </div>
    </>
    
  )
    
}
