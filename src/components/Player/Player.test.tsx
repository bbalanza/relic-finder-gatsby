import React from "react";
import { screen, render} from '@testing-library/react'
import { Player } from '.'

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

describe('Test audio player', () => {
    it('It renders an audio player with the specified audio file as src', async () => {
        render(<Player src='test.mp3' />)
        await sleep(100)
        expect(screen.getByTitle('audio-player').children[0].getAttribute('src')).toBe('test.mp3')
    })
})