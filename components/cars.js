import React from 'react';
import NumberFormat from 'react-number-format';
import Rating from './rating';

// BOOTRSTRAP STYLES
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

// useSWR FUNCTIONALITY
import useSWR from 'swr';
import Error from '../components/error';
import Spinner from '../components/spinner';
const carsUrl = 'https://ha.edu.uy/api/cars';

const Cars = ({ inDollars }) => {
  const { data, error } = useSWR(carsUrl);
  return (
    <>
      {error ? (
        <Error />
      ) : !data ? (
        <Spinner />
      ) : (
        data.map((car, index) => {
          return (
            <div key={index}>
              <div className="image mb-2">
                <Image thumbnail src={car.image} fluid />
                {car.status === 1 ? <div className="badge">new</div> : null}
              </div>
              <div className="content mb-4">
                <div className="title-content">
                  <h4>
                    {car.brand} {car.model}
                  </h4>
                  <div className="d-flex">
                    <span className="mr-1">{car.year} /</span>
                    <span className="mr-1">
                      {inDollars ? (
                        <NumberFormat
                          value={car.price_usd}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'USD '}
                        />
                      ) : (
                        <NumberFormat
                          value={(
                            Math.round(car.price_uyu * 100) / 100
                          ).toFixed(2)}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'$'}
                        />
                      )}{' '}
                      /
                    </span>

                    <span>
                      <Rating value={car.rating} color={'#f8e825'} />
                    </span>
                  </div>
                </div>
                <p>{car.description}</p>
                <ButtonGroup size="sm" aria-label="Basic example">
                  <Button className="mr-2" variant="success">
                    Buy car
                  </Button>
                  <Button className="mr-2" variant="info">
                    More Information
                  </Button>
                  <Button variant="light">Share</Button>
                </ButtonGroup>
              </div>
              <div className="divider" />
            </div>
          );
        })
      )}
    </>
  );
};

export default Cars;
