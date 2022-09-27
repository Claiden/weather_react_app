import React from "react";

function Card (props){
    const {temp_max, temp_min, city, sky} = props

    return(
        <div className="Card">
            <div className="city-name">
                <h3>Maputo{city}</h3>
            </div>
            <div className="img-container">
                <p className="ceu">ceu limpo{sky}</p>
                <div className="img">
                <img src="../assets/imgs/cloudy.png" className="img"/>
                    {sky === 'Clouds' ? <img src="../assets/imgs/cloudy.png" className="img"/> : null}
                    {sky === 'Clear' ? <img src="../assets/imgs/sun.png" className="img"/> : null}
                    {sky === 'Clouds' ? <img src="../assets/imgs/cloudy.png" className="img"/> : null}
                </div>
            </div>
            <div className="detalhes" > 
                <div>Max {temp_max}</div>
                <div>Min {temp_min}</div>
            </div>
        </div>
    )
}

export default Card