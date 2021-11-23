import './style.css'

export default function Section2() {
    return (
        <section className="section2" id="destination">
            <img src="travel.svg" alt="figure2"/>

            <aside>
                <div id="title-section2"><p>Travel to any corner of the World</p></div>
                <div id="text-section2"><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p></div>

                <div id="list-data">
                    <div id="data1" ><p><span>20</span> Years Experience</p></div>
                    <div id="data"><p><span>50</span> Destination Collaboration</p></div>
                    <div id="data"><p><span>600+</span> Tourist Destination</p></div>  
                  
                </div>

                <button><a href="#">Explore Destination</a></button>
            </aside>
        </section>
    )
}
