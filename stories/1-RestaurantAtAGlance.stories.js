import React from 'react';
import { storiesOf } from '@storybook/react';
import RestaurantAtAGlance from '../src/components/RestaurantAtAGlance';

storiesOf('RestaurantsAtAGlance', module)
    .add('open', () => (
        <RestaurantAtAGlance
            name={ 'Restaurant Name' }
            stars={ 4 }
            category={ 'Japanese' }
            price={ '$$$$' }
            isOpen={ true }
        />
    ))
    .add('closed', () => (
        <RestaurantAtAGlance
            name={ 'Restaurant Name' }
            stars={ 4 }
            category={ 'Japanese' }
            price={ '$$$$' }
            isOpen={ false }
        />
    ))
    .add('long name', () => (
        <RestaurantAtAGlance
            name={ 'Very Long Name Restaurant Now With MOAR WORDS IN NAME' }
            stars={ 2.5 }
            category={ 'Thai' }
            price={ '$' }
            isOpen={ open }
        />
    ))
    .add('big', () => (
        <RestaurantAtAGlance
            name={ 'Restaurant Name' }
            stars={ 2.5 }
            category={ 'Thai' }
            price={ '$' }
            isOpen={ open }
            big
        />
    ))