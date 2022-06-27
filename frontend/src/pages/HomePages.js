import React from 'react'

function HomePages() {
  return (
    <main className="holder">
        <div>
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="Inicio"/>
            </div>
            <div className="columnas">
                <div className="Bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores repudiandae accusantium ipsam
                        eaque
                        magnam omnis dignissimos adipisci ipsum quod qui! Harum expedita consectetur tempore soluta quo,
                        architecto delectus eligendi illum?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores repudiandae accusantium ipsam
                        eaque
                        magnam omnis dignissimos adipisci ipsum quod qui! Harum expedita consectetur tempore soluta quo,
                        architecto delectus eligendi illum?</p>
                </div>

                <section>
                    <section className="Testimonios">
                        <h2>Testimonios</h2>
                        <div className="testimonio">
                            <span className="cita"> Muy Recomendado</span>
                            <span className="autor">Matias Perez - zapatos.com</span>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    </main>
  )
}

export default HomePages