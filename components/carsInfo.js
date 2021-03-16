//FORMAT NUMBERS FOR DOLLARES AND PESOS
import NumberFormat from 'react-number-format';

// BOOTRSTRAP STYLES
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

//COMPONENTS IMPORTED
import Error from './error';
import Spinner from './spinner';
import Rating from './rating';

const Cars = ({ carsInfo, inDollars }) => {
  return (
    <div className="cars-container">
      {!carsInfo ? (
        <Spinner />
      ) : carsInfo.length === 0 ? (
        <Error />
      ) : (
        carsInfo.map((car, index) => {
          return (
            <div key={index}>
              {/* CARS IMAGE */}
              <div className="image mb-2">
                <Image thumbnail src={car.image} fluid />
                {car.status === 1 ? <div className="badge">new</div> : null}
              </div>
              {/* CARS INFORMATION */}

              {/* CARS NAME AND BRAND */}
              <div className="content mb-4">
                <div className="title-content">
                  <h3>
                    {car.brand} {car.model}
                  </h3>

                  {/* CARS YEAR, PRICE AND RATING */}
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
                    <Rating value={car.rating} color={'#f8e825'} />
                  </div>
                </div>

                {/* CARS DESCRIPTION */}
                <p>{car.description}</p>

                {/* BUTTON WRAPPER */}
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
    </div>
  );
};

export default Cars;
