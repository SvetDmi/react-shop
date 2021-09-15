import React from "react";

function Alert(props) {
    const { name, onCloseAlert } = props;


    React.useEffect(() => {
        const timerId = setTimeout(onCloseAlert, 3000);
        return () => {
            clearTimeout(timerId)
        }
    }, [name])

    return (
        <div id="toast-container">
            <div className="toast">{name} добавлен в корзину</div>
        </div>
    )

}

export { Alert }