import { screen, render } from '@testing-library/react'
import { RelicPreview } from '.'
import React from 'react'

// Credit to https://bradgarropy.com/blog/mocking-gatsby-image for this amazing mock
jest.mock('gatsby-plugin-image', () => {
    const React = require('react');
    const originalModule = jest.requireActual('gatsby-plugin-image');
    const mockImage = ({imgClassName, ...props}: {imgClassName: string, props: any}) => 
    React.createElement('img', {
        ...props,
        className: imgClassName,
        image: 'test.png'
    })
    return {
        __esModule: true,
        ...originalModule,
        GatsbyImage: jest.fn().mockImplementation(mockImage),
        StaticImage: jest.fn().mockImplementation(mockImage),
    };
})

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