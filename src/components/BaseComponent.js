import React from 'react'

// base tipica (componente de clase)
// export default class buttonCl extends React.Component {
//     render() {
//         return (
//             <>
//             <button>boton cl</button>
//             </>
//         )
//     }
// }

// componente funcional
const buttonFc = ({text,color,padding}) => {
    console.log("Este es el props");
    return(
        <>
            <button style={{color : color}}>{text}</button>
            </> 
    )
}

export default buttonFc