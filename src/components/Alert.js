import React from "react";

// function Alert(props) {
//     const { name, onCloseAlert } = props;


//     React.useEffect(() => {
//         const timerId = setTimeout(onCloseAlert, 3000);
//         return () => {
//             clearTimeout(timerId)
//         }
//     }, [name])

//     return (
//         <div id="toast-container">
//             <div className="toast">{name} добавлен в корзину</div>
//         </div>
//     )

// }

// ПЕРЕКЛЮЧЕНИЕ НА КОНТЕКСТ И РЕДЮСЕР


import { ShopContext } from '../context';

function Alert() {

    const { alertName, closeAlert } = React.useContext(ShopContext);

    React.useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);
        return () => {
            clearTimeout(timerId)
        }
    }, [alertName])

    return (
        <div id="toast-container">
            <div className="toast">{alertName} добавлен в корзину</div>
        </div>
    )

}

export { Alert }