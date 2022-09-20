import React, {useEffect, useState} from "react";
import axios from 'axios'

const Disp = () => {
    let [curr, setCurr] = useState()
    
    const ambilData = async () => {
        const data = axios.get(
            'https://api.currencyfreaks.com/latest?apikey=0a46e26af87c47c69f1835dd45495b89&symbols=CAD,EUR,IDR,JPY,CHF,GBP'
        )
        return data
    }

    useEffect(() => {
        ambilData().then(res => setCurr(res))
    }, [])

    const theHead = ["Currency", "We Buy", "Exchange Rate", "We Sell"]
    // console.log(curr.data.rates)
    // const dataName = Object.key(curr.data.rates)
    return(
        <>
            <table>
                <thead>
                    <tr>
                        {theHead.map((name, idx) => {
                            return <th key={idx}>{name}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(curr.data.rates).map((data, idx, ar) => {
                        Object.values(curr.data.rates).map(value => {

                            return (
                                console.log(Object.keys(curr.data.rates)),
                                <tr key={idx}>
                                    <td>{data}</td>
                                    <td>{value}</td>
                                </tr>
                            )
                        })
                        // const myData = Object.keys(curr.data.rates)
                    })}
                </tbody>
            </table>
            {console.log("LOL")}
        </>
    )
}

export default Disp