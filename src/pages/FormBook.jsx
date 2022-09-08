import React from 'react'
import { useRef } from 'react'

export default function FormBook() {

    let refAutor = useRef();
    let refForm = useRef();


    const submit = e => {

        console.log('form', e.target)

        e.preventDefault();

        const form = e.target;

        const data = new FormData(form);
        const json = Object.fromEntries(data.entries());

        console.log('data', json)
        console.log('autor', refAutor.current.value);

    }
    return (
        <div>

            <form ref={refForm} onSubmit={submit}>

                <label>Autor:</label>

                <input ref={refAutor} type="text" name="autor" id="autor" />


                <label>Título:</label>
                <input type="text" name="titulo" id="titulo" />

                <label>Ano:</label>
                <input type="text" name="ano" id="ano" />

                <button type="submit">ENVIAR</button>
                <button type="reset">LIMPAR</button>



            </form>

        </div>
    )
}
