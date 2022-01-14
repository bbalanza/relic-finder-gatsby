import { screen, render } from '@testing-library/react'
import { RelicPreview } from '.'
import React from 'react'

describe('Test RelicPreview', () => {
    it('Shows the picture passed as prop', () => {
        render(<RelicPreview localFile='' />)
        expect(screen.getByAltText('Relic Image').getAttribute('image')).toBe('test.png');
    })
    it('Displays children components', () => {
        render(
        <RelicPreview localFile=''>
            <h1 data-testid='testTarget' >This was rendered</h1>
        </RelicPreview>)
        expect(screen.getByTestId('testTarget').textContent).toBe('This was rendered')
    })
})