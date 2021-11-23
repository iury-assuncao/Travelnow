import './style.css'

import React from 'react'

export default function Section5() {
    let ano = new Date().getFullYear();
    
    return (
        
            <footer>

            <div class="footer" >

                    <div >

                    <div id="collumn">
                        <img src="travelnow.svg" alt="logo svg footer" />
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>

                    </div>

                    </div>

                    <div id="colunas">

                    <div id="collumn">
                    <h4>Tour</h4>

                        <a href="#">Thiland</a>
                        <a href="#">Canada</a>
                        <a href="#">Korea</a>
                        <a href="#">Italy</a>

                    </div>

        
                    <div id="collumn">
                        <h4>Support</h4>
                        <a href="#">Acount</a>
                        <a href="#">Legal</a>
                        <a href="#">Contact</a>
                        <a href="#">Privacy policy</a>
                        
                    </div>
                    
                    <div id="collumn">
                        <h4>Userful Pages</h4>
                        <a href="#">Deals</a>
                        <a href="#">FAQs </a>
                        <a href="#">Why Us</a>
                    </div>
                </div>
     
            </div>

            <div id="copy"><p>{ano} · All rights reserved.</p></div>
            </footer>

            
       
        
    )
}
