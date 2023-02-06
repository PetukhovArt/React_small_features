import React from 'react';

type MapType = {
    cars: Array<CarType>
}

type CarType = {
    manufacturer: string
    model: string
}

export const Task2Map = (props: MapType) => {

    return (
        <table>

            {props.cars.map((el, index) => {
                return (
                    <tbody key={index}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                    </tbody>
                )
            }
            )
            }
        </table>
    )
}