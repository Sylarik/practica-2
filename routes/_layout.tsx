import { PageProps } from "$fresh/server.ts";


const layout = (props: PageProps) => {
    const Component = props.Component

    return (
        <>
        <div class="centrar">
            <div class="layout">   
                <a href="/"> PAGINA PRINCIPAL </a>
                <a href ="/addHeroe">AÑADIR HEROE</a>
                <a href="/searchHeroe">BUSCAR HEROE</a>   
            </div>

            <div>
                <Component/>
            </div>

        </div>
        </>
    )

}

export default layout;