import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


//aca quiero pintar los elementos de appi
export const Lista = () => {
    const {store, actions} = useContext(Context);

    return (
        <div className="row">
            <p>elementos</p>
            {store.users.map((item, index) => {
                <div>
                    <div className="lista" key={index}>{item.email}</div>
                    
                </div>
                
            })}
        </div>
    )
}