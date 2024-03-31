import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";

export const Form: FunctionComponent = () => {
  const [error, setError] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [sound, setSound] = useState<string>("");
  const [creator, setCreator] = useState<string>("");


  const submitHandler = (e:JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    const errorMsg: string[] = [];
    
    if (name === "") {
      errorMsg.push("You must provide a name");
    }

    if (image === "") {
      errorMsg.push("You must provide a image");
    }

    if (sound === "") {
        errorMsg.push("You must provide a sound");
    }

    if (creator === "") {
        errorMsg.push("You must provide a creator");
    }

    if (errorMsg.length > 0) setError(errorMsg.join(" | "));
    else {
      setError("");
      e.currentTarget.submit();
    }
  }
  

  return (
    <div class="form">
      <h2> añade a nuestro salvador</h2>
      <form action="/addHeroe" method="POST" class="formulario">
        <input type="text" name="nombre" placeholder="name" onInput={(e) => setName(e.currentTarget.value)}></input>
        <input type="text" name="imagen" placeholder="image" onInput={(e) => setImage(e.currentTarget.value)}></input>
        <input type="text" name="sonido" placeholder="sound" onInput={(e) => setSound(e.currentTarget.value)}></input>
        <input type="text" name="creador" placeholder="creator" onInput={(e) => setCreator(e.currentTarget.value)}></input>

        <button type="submit"> Añadir  </button>
      </form>
      
    </div>
  );
};

export default Form;