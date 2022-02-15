import React from "react";
import { screen, render} from '@testing-library/react'
import { Player } from '.'

describe('Test audio player', () => {
    it('It renders an audio player with the specified audio file as src', () => {
        render(<Player src='test.mp3' />)
        expect(screen.getByTitle('audio-player').getAttribute('src')).toBe('test.mp3')
    })
})