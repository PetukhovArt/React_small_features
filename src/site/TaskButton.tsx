import React from 'react';


export const TaskButton = (props: any) => {

    const myFirstSub = () => {
        console.log('My Name is Vasya1')
    }
    const mySecondSub = () => {
        console.log('My Name is Petya2')
    }
    // const onClickHandler = (name: string) => {
    //     console.log(name);
    // }
    // const foo1 = () => {
    //     console.log(100200);
    // }
    // const foo2 = (name: number) => {
    //     console.log(name);
    // }


    return (
        <div>
            <button onClick={myFirstSub}>YouTube1</button>
            <button onClick={mySecondSub}>YouTube2</button>
            {/* <button onClick={foo1}>1</button>
            <button onClick={(MouseEvent)=>foo2(100200)} >2</button>
            <button onClick={(MouseEvent) => onClickHandler('Vasya')}>3</button>
            <button onClick={(MouseEvent) => onClickHandler('Petya')}>4</button> */}
        </div >
    )
}