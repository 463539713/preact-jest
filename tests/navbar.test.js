import { h } from 'preact'
import Navbar from '../src/components/navbar/Navbar'
import { testLayout } from './tests'

import { shallow } from 'enzyme'

const component = shallow(<Navbar />)

describe('<Navbar /> Test', () => {
  testLayout('check no class', 'Navbar have no class', component)

  testLayout('check element exist', 'Navbar has child with .container class', component, {
    element: {
      parent: 'nav',
      selector: '.container',
    },
  })
})
