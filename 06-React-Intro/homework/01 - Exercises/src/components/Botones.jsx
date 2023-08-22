import React from "react";

// export default function Botones(){
//     return(
//         <div>
//             <button onClick={()=>alert("Lo que sea")}>Módulo 1</button>
//             <button onClick={()=>alert("Otro")}>Módulo 2</button>
//         </div>
//     )
// }

class Botones extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <button onClick={()=>alert(this.props.alerts.m1)}>Módulo 1</button>
                <button onClick={()=>alert(this.props.alerts.m2)}>Módulo 2</button>
            </div>
        )
    }
}
export default Botones