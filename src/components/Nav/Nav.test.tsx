import * as React from "react"
import { render, screen} from "@testing-library/react"

import Nav from './Nav'

describe('Tests Nav', () => {
   it('Renders the nav', () => {
       render(<Nav data-testid='nav'/>)
       expect(screen.getByTitle('logo')).toBeDefined()
   }) 
});