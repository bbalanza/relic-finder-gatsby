import { screen, render} from '@testing-library/react';
import { Scanner } from './index';
import React from 'react'

describe('Test Scanner component', () => {
    it('Renders the QR Scanner component.', () => {
        window.alert = (msg: string) => {}
        render(<Scanner data-testid="scanner"/>)
        expect(screen.getByTestId('scanner').id).toBe('reader');
    })
})