import React, { useState } from 'react';


type FilterButtonType = {
    money: Array<MoneyType>
}
type MoneyType = {
    banknots: string
    value: number
    number: string
}
type FilterType = 'All' | 'Dollars' | 'RUBLS'


export const FilterButton= (props: FilterButtonType) => {
    const [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = (filter === 'All') ? props.money : props.money.filter((el) => el.banknots === filter)
    //если юстейт=All ретурн исх массив, иначе фильтруем по наименованию банкнот

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton);
    }
    return (
        <>
            <table className="table">
                {currentMoney.map((el, index) =>
                    <tbody key={index}>
                        <tr>
                            <td>{el.banknots}</td>
                            <td>{el.value}</td>
                            <td>{el.number}</td>
                        </tr>
                    </tbody>
                )}
            </table>
            <div style={{ marginLeft: '80px' }}>
                <button onClick={() => onClickFilterHandler('Dollars')} >Dollars</button>
                <button onClick={() => onClickFilterHandler('RUBLS')} >RUBLS</button>
                <button onClick={() => onClickFilterHandler('All')} >All</button>
            </div>
        </>
    )
}