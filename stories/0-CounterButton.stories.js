import React from 'react';
import { storiesOf } from '@storybook/react';

import { CounterButton } from '../src/components/CounterButton';

storiesOf('CounterButton', module)
    .add('with 99 as counter', () => <CounterButton counter={ 99 } onCounterButtonClicked={ () => { } } />);