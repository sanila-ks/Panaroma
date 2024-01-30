import { useEffect, useState } from "react";
import CoffeeItem from "./CoffeeItem";
import axios from "axios";

export default function MenuBoard() {

    const [dataSet, setDataSet] = useState([])

    useEffect(() => {
        axios.get("https://api.sampleapis.com/coffee/hot")
            .then((response) => {
                if (response.status === 200) {
                    setDataSet(response.data)
                } else setDataSet([])
            })
    }, [])

    return (
        <div className="col" style={{ backgroundColor: "#e3dcdc" }}>
            <div className="py-1">
                <h3 className="text-center">MOCHA CAFE</h3>
            </div>
            <div className="row m-2">
                {dataSet.length > 0 ? dataSet.map(item => {
                    return (
                        <div className="col-md-3 col-sm-1" key={item.id}>
                            <CoffeeItem details={item} />
                        </div>)
                })
                    : <h3>Loading................</h3>}
            </div>
        </div>
    )
}