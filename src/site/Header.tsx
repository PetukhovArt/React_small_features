import React from 'react';

type HeaderType = {
    titleHeader: string
}

export const Header=(props:HeaderType)=> {
    return (
        <>
            <div>PROPS header = {props.titleHeader}</div>
        </>
    )
}