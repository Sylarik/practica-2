import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";

export const Form: FunctionComponent= () => {

    const [msg, setMensaje] = useState<string>("");
    
    const [name, setName] = useState<string>("");
    const [creator, setCreator] = useState<string>("");

    const eliminar = async() => {
        const url = await fetch(`/deleteHeroe`,{
            method: 'delete',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({name:name,creator: creator}),
        })

        if(url.status === 204){
            setMensaje("se ha eliminado")
            console.log("hola")
            console.log(msg)
        }
    }

    /*
  const submitHandler = (e:JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    const errorMsg: string[] = [];
    
    if (name === "") {
      errorMsg.push("You must provide a name");
    }

    if (creator === "") {
        errorMsg.push("You must provide a creator");
    }

    if (errorMsg.length > 0) setError(errorMsg.join(" | "));
    else {
      setError("");
      e.currentTarget.submit();
    }
  }*/
  

  return (
    <>
      <div class="formulario form">
          <h2 class="aling:center"> que heroe quieres mandar a hades </h2>
          <input type="text" name="nombre" placeholder="name" onInput={(e) => setName(e.currentTarget.value)}></input>
          <input type="text" name="creador" placeholder="creator" onInput={(e) => setCreator(e.currentTarget.value)}></input>

          <button type="submit" onClick={eliminar}> Eliminar  </button>

      </div>
      <p class="msgg">
        {msg!=="" && <div>{msg}</div>}
      </p>

    </>
    
  );
};

export default Form;