import React from 'react'
import {render, screen} from '@testing-library/react'
import { Content } from '.'

describe('Test Content Component', () => {
    it('Renders child components.', () => {
        render(<Content data-testid='content'>
            <h1>First</h1>
            <h2>Second</h2>
        </Content>)
        const children = screen.getByTestId('content').childNodes;
        expect(children[0].textContent).toBe('First');
        expect(children[1].textContent).toBe('Second');
    })
})