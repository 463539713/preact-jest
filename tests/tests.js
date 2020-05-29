export const testLayout = (type, name, component, target) => {
  switch (type) {
    case 'check no class':
      test(name, () => {
        expect(component.props().hasOwnProperty('className')).toBeFalsy()
      })
      break
    case 'check element exist':
      test(name, () => {
        const { selector } = target.element
        expect(component.find(selector).exists()).toBeTruthy()
	  })
	  break 
    case 'check class exist':
      test(name, () => {
        const { parent, child, classlist } = target.element
        const wrapper = component.find(parent)
        expect(wrapper.find(child).hasClass(classlist)).toBe(true)
      })
	  break
    case 'check element length':
      test(name, () => {
        const { selector, tag, length } = target.element
        const wrapper = component.find(selector)
        expect(wrapper.find(tag)).toHaveLength(length)
      })
      break

    case 'check element attribute':
      test(name, () => {
        const { selector, property, value } = target.attribute
        const wrapper = component.find(selector)
        expect(wrapper.props()).toHaveProperty(property, value)
      })
      break
    default:
      return console.log('Define Test')
  }
}

//   test(name, () => {
//     const { selector, index, name } = target.classname
//     expect(component.find(selector).at(index).hasClass(name)).toBe(true)
//   })
