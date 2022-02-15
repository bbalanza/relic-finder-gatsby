import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { GradientButton } from '.'

describe('Test Button Component', () => {
    it('Displays children', () => {
        render(<GradientButton><h1>First</h1><h2>Second</h2></GradientButton>)
        expect(screen.getByText("First").textContent).toBe("First");
        expect(screen.getByText("Second").textContent).toBe("Second");
    })
    it('Executes onClick function', () => {
        const onClick = jest.fn();
        render(<GradientButton onClick={onClick}>Test</GradientButton>)
        const button = screen.getByText("Test");
        userEvent.click(button)
        expect(onClick).toBeCalled()
    })
})