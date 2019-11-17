import React from 'react';
import { useParams, withRouter } from 'react-router-dom';

const RestaurantDetailsPage = (props) => {
    const { restaurantId } = useParams();
    return (<>
        <h3>Details for restaurant with ID: { restaurantId }</h3>;
    <button onClick={ () => props.history.push('/') }>Go to main page</button>

    </>);
};

export default withRouter(RestaurantDetailsPage);