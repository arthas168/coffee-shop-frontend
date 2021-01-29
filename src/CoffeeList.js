import React from 'react'

const CoffeeList = ({ coffeeData }) => {

    return coffeeData.map((coffeeObject, index) => {
        return (
            <ul className="coffee-row">
                <li className="product-name">{index+1}. {coffeeObject["productName"]}</li>
                <li className="description">{coffeeObject["description"]}</li>
                <li className="origin-country">{coffeeObject["originCountry"]}</li>
                <li className="price">{coffeeObject["price"]} $</li>
            </ul>
        )
    })

}

export default CoffeeList
