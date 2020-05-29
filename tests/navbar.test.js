import { h }  from 'preact'
import Navbar         from '../src/components/navbar/Navbar'
import { testLayout } from './tests'

import { shallow }    from 'enzyme'

const component = shallow(<Navbar />)

describe('<Navbar /> Test', () => {
  testLayout('check no class', 'Navbar have no class', component)

  testLayout(
    'check element',
    'Navbar has child with .container class',
    component,
    {
      element : {
        selector: '.container',
      },
    }
  )

  testLayout('check class', 'Navbar .container have .text-center class', component, {
    element : {
      selector  : '.container',
      classlist : 'container',
    },
  })

  testLayout(
    'check attribute',
    'Navbar .container have layout=normal attribute',
    component,
    {
      element : {
        selector : '.container',
        property : 'layout',
        value    : 'normal',
      },
    }
  )

  testLayout('check length', 'Navbar has 2 menu', component, {
    element : {
      parent : '.menus',
      child  : 'li',
      length : 2,
    },
  })

  testLayout('check text', 'Navbar\'s first menu is "Home"', component, {
    element : {
      selector : 'li',
      text     : 'Home',
    },
  })

  testLayout('check text', 'Navbar\'s second menu is "About"', component, {
    element : {
      selector : 'li',
      index    : 1,
      text     : 'About',
    },
  })
})
