import React from "react";

const callback = (): void => {

}
window.setTimeout(callback, 1000)

export const User = () => {

    const deleteUser = () => {
        alert("users have been deleted")
    }
    const saveUser = () => {
        alert("users have been save")
    }

    const onNameChanget = () => {
        console.log("name changed")
    }

    const focusLostHandler = () => {
        console.log("focus lost")
    }
    return (

        <div> <textarea
            onChange={onNameChanget}
            onBlur={focusLostHandler}
        >
            Yo</textarea>
            <input/>
            <button tabIndex={2} onClick={deleteUser}>delete</button>
            <button tabIndex={1} onClick={saveUser}>save</button>

        </div>
    )
}