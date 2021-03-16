import { useState, useEffect } from 'react';
import axios from 'axios';

// BOOTRSTRAP STYLES
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// COMPONENTS IMPORTED
import Customlabel from '../components/customLabel';
import CustomSelect from './customSelect';

const Filter = ({ setCarsInfo, inDollars, setInDollars }) => {
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState('');
  const [models, setModels] = useState([]);
  const [model, setModel] = useState('');

  // GETTING MY INITIAL BRANDS AND MODELS
  const getBrandsAndModelsOnLoad = () => {
    const brandsUrl = 'https://ha.edu.uy/api/brands';
    //Firs we get all the brands
    axios.get(brandsUrl).then(res => {
      setBrands(res.data);
      setBrand(res.data[0]);
      //After we resolve the brands we get the models with index[0]
      const modelsUrl = `https://ha.edu.uy/api/models?brand=${res.data[0]}`;
      axios.get(modelsUrl).then(res2 => {
        setModels(res2.data);
        setModel(res2.data[0]);
      });
    });
  };

  // GETTING MY MODELS WHEN BRANDS CHANGE
  const getModels = e => {
    const modelsUrl = `https://ha.edu.uy/api/models?brand=${e.target.value}`;
    axios.get(modelsUrl).then(res => {
      setModels(res.data);
      setModel(res.data[0]);
    });
  };

  // HANDLE THE CURRENCY
  const handleCurrency = () => {
    setInDollars(!inDollars);
  };

  // HANDLE THE FILTER
  const handleFilter = async () => {
    const filterUrl = `https://ha.edu.uy/api/cars?brand=${brand}&model=${model}`;

    if (!brand === '' || model === '') {
      alert('You need to select a brand and a model');
    } else {
      const res = await fetch(filterUrl);
      const filteredCars = await res.json();
      setCarsInfo(filteredCars);
    }
  };

  // GET ALL THE CARS
  const getAllCars = async () => {
    const carsUrl = 'https://ha.edu.uy/api/cars';
    const res = await fetch(carsUrl);
    const data = await res.json();
    setCarsInfo(data);
  };

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      getBrandsAndModelsOnLoad();
    }
    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <Form>
      {/* BRAND VALUES */}
      <div className="form-group">
        <Customlabel htmlFor="brand" label="Brands" />
        <CustomSelect
          onChange={e => {
            getModels(e);
            setBrand(e.target.value);
          }}
          name="brand"
          options={brands}
        />
      </div>

      {/* MODEL VALUES */}
      <div className="form-group">
        <Customlabel htmlFor="model" label="Models" />
        <CustomSelect
          onChange={e => setModel(e.target.value)}
          name="model"
          options={models}
        />
      </div>

      {/* FILTER BUTTON */}
      <Button type="button" onClick={handleFilter} className="btn-block mb-3">
        Filter
      </Button>

      {/* CURRENCY BUTTON */}
      <Button
        type="button"
        variant="secondary"
        className="btn-block"
        onClick={handleCurrency}
      >
        {inDollars ? 'Change To Pesos' : 'Change To Dollars'}
      </Button>

      {/* FILTER BUTTON */}
      <Button type="button" onClick={getAllCars} className="btn-block mb-3">
        All cars
      </Button>
    </Form>
  );
};

export default Filter;
