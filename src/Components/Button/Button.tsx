import React from 'react';

type ButtonType = {
    name: string
    callBack: () => void
}



export const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callBack() //asking for callback (callback descr in APP)
    }
    return (
        <button onClick={onClickHandler} >{props.name}</button>
    )
}