import './style.css'

import React from 'react'

export default function Section3() {
    return (
        <section className="section3">
            <div className="card">
                <img id="img-card" src="Mountains.jpg"/>
                <p id="title-card">Travel to Mountains</p>
                <div>
                    <img src="estrela.svg" />
                    <img src="estrela.svg" />
                    <img src="estrela.svg" />
                    <img src="estrela.svg" />
                    <img src="estrela.svg" />
                </div>
                <p id="value">$ 6000</p>
            </div>

            <div className="card">
                <img id="img-card" src="Desert.jpg"/>
                <p id="title-card">Travel to Desert</p>
                <div>
                    <img src="estrela.svg" />
                    <img src="estrela.svg" />
                    <img src="estrela.svg" />
                    <img src="estrela.svg" />
                    <img src="estrela.svg" />
                </div>
                <p id="value">$ 6000</p>
            </div>

            <div className="card">
                <img id="img-card" src="Camping.jpg"/>
                <p id="title-card">Camping in Mountains</p>
                <div>
                    <img src="estrela.svg" />
                    <img src="estrela.svg" />
                    <img src="estrela.svg" />
                    <img src="estrela.svg" />
                    <img src="estrela.svg" />
                </div>
                <p id="value">$ 6000</p>
            </div>
        </section>
    )
}
