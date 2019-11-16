import React from 'react';
import { shallow } from 'enzyme';
import { CounterButton } from './CounterButton';

describe('CounterButton tests', () => {
    it('Renders with the correct number in its button.', () => {
        const counterButtonWrapper = shallow(<CounterButton counter={ 5 }></CounterButton>);
        expect(counterButtonWrapper.text().includes('5')).toBe(true);
    });
});