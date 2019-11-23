import React from 'react';
import { storiesOf } from '@storybook/react';
import RestaurantReview from '../src/components/RestaurantReview';

storiesOf('RestaurantReview', module)
    .add('default', () => (
        <RestaurantReview
            user={ { name: 'Reviewer Name', image_url: 'testImage.png' } }
            text='This is the text of the review. Its the best review in the whole wide world. Just ask ANYONE!'
            rating={ 5 }
            timeCreated={ '1/1/2000' }
            useSeparator={ false }
        />
    ))
    .add('with separator', () => (
        <RestaurantReview
            user={ { name: 'Reviewer Name', image_url: 'testImage.png' } }
            text='This is the text of the review. Its the best review in the whole wide world. Just ask ANYONE!'
            rating={ 5 }
            timeCreated={ '1/1/2000' }
            useSeparator
        />
    ));