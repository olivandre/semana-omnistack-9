import React, { useState, useMemo } from "react";

import camera from "../../asserts/camera.svg"
import "./style.css";

export default function New(){

    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    
    function handlerSubmit(){

    }
    return (
        <form onSubmit={handlerSubmit}>
            <label id="thumbnail">
                <input type="file" 
                       onChange={event => setThumbnail(event.target.files[0])}/>
                <img src={camera} alt="Select img"/>
            </label>

            <label htmlFor="company">Empresa *</label>
            <input type="text" 
                   id="company" 
                   placeholder="Sua empresa incrível"
                   value={company}
                   onChange={event => setCompany(event.target.value) }/>

            <label htmlFor="techs">Tecnologia * <span>Separadas por vírgula</span></label>
            <input type="text" 
                   id="techs" 
                   placeholder="Quais tecnologias usam?"
                   value={techs}
                   onChange={event => setTechs(event.target.value) }/>

            <label htmlFor="price">Valor da diária<span>(em branco para GRATUITO)</span></label>
            <input type="text" 
                   id="price" 
                   placeholder="Valor cobrado por dia"
                   value={price}
                   onChange={event => setPrice(event.target.value) }/>

            <button type="submit" className="btn">Cadastrar</button>
        </form>
    );
}