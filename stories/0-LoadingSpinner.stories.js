
import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadingSpinner from '../src/components/atoms/LoadingSpinner';

storiesOf('LoadingSpinner', module)
    .add('default', () => <LoadingSpinner />);