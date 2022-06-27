import React from 'react'

function ContactoPages() {
  return (
    <main className="holder">
        <h2>Contacto Rapido</h2>
        <div className="columns">
            <div className="contacto">
                <form action="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label for="comentario">Comentario</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>

            <div className="datos">
                <h2>Otras vias de contacto</h2>
                <ul>
                    <li>Telfono: 42245674</li>
                    <li>Email: transportesx@gmail.com</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </div>
    </main>
  )
}

export default ContactoPages