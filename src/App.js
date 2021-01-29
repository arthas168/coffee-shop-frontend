import { useEffect, useState } from 'react'
import CoffeeList from "./CoffeeList"
import Loader from 'react-loader-spinner'
import './App.scss'

const axios = require('axios')

const App = () => {

  const [coffeeData, setCoffeeData] = useState();
  const [loading, setLoading] = useState(true);

  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  useEffect(() => {
    axios.get(proxyUrl + 'http://coffeesupply.ddns.net/coffee')
      .then(function (response) {
        setCoffeeData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      })
  }, [])

  if (loading) return (
    <Loader
      className="loader"
      type="Oval"
      color="#000"
      height={100}
      width={100}
      timeout={5000} //3 secs

    />
  );

  return (
    <div className="App">
      <div className="coffee-list">
        <CoffeeList coffeeData={coffeeData} />
      </div>
    </div>
  );
}

export default App;
