import React from 'react';
import { storiesOf } from '@storybook/react';
import { RestaurantCard } from '../src/components/RestaurantCard';

storiesOf('RestaurantCard', module)
    .add('default', () => (
        <RestaurantCard
            alias={ 'alias' }
            name={ 'Restaurant Name' }
            stars={ 4 }
            category={ 'JAPANESE' }
            price={ '$$$$' }
            isOpen={ true }
            imageUrl={ 'https://i.ytimg.com/vi/MHG3n_-Y33A/maxresdefault.jpg' }
        />
    ))
    .add('long name', () => (
        <RestaurantCard
            alias={ 'alias' }
            name={ 'Very Long Name Restaurant Now With MOAR WORDS IN NAME' }
            stars={ 4 }
            category={ 'JAPANESE' }
            price={ '$$$$' }
            isOpen={ true }
            imageUrl={ 'https://i.ytimg.com/vi/MHG3n_-Y33A/maxresdefault.jpg' }
        />
    ))
    .add('taller image', () => (
        <RestaurantCard
            alias={ 'alias' }
            name={ 'Clever Punny Restaurant Name' }
            stars={ 4 }
            category={ 'JAPANESE' }
            price={ '$' }
            isOpen={ false }
            imageUrl={ 'https://static.wixstatic.com/media/78f7be_6740ba06bc064a11b79ab104a90aaf08~mv2_d_4664_3998_s_4_2.jpg/v1/fill/w_640,h_666,al_r,q_85,usm_0.66_1.00_0.01/78f7be_6740ba06bc064a11b79ab104a90aaf08~mv2_d_4664_3998_s_4_2.webp' }
        />
    ))