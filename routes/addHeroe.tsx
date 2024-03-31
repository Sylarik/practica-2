import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { stripSuffix } from "$std/path/_common/basename.ts";
import {HeroeType} from "../types.ts"
import {Heroe} from "../components/Heroe.tsx"
import AddForm from "../islands/AddForm.tsx";


export const handler: Handlers = {
    POST: async (req: Request, ctx: FreshContext<unknown,string>) => {

        const form = await req.formData()
        
        const name= form.get("nombre")
        const image = form.get("imagen")
        const sound = form.get("sonido")
        const creator = form.get("creador")

        const personaje = {
            name:name,
            image:image,
            sound:sound,
            creator:creator,
        }
      
      const url = await axios.post(`https://supermondongo.deno.dev/`, {
        name: personaje.name,
        image: personaje.image,
        sound: personaje.sound,
        creator: personaje.creator,
      })

      if(!url){
        return new Response("Error fetching heroes", {status:500})
      }

      

      return ctx.render("heroe creado");
  
    }
  }

const Page = (props: PageProps) => {

    return(
        <div>
            
            <AddForm/>

            <p>{props.data}</p>
            

        </div>
        
    )
}

export default Page;

