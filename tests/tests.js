export const testLayout = (type, name, component, target) => {
  switch (type) {
    case 'check no class':
      test(name, () => {
        expect(component.props().hasOwnProperty('className')).toBeFalsy()
      })
      break

    case 'check element':
      test(name, () => {
        const { selector } = target.element
        expect(component.find(selector).exists()).toBeTruthy()
      })
      break

    case 'check class':
      test(name, () => {
        const { selector, classlist } = target.element
        expect(component.find(selector).hasClass(classlist)).toBe(true)
      })
      break

    case 'check attribute':
      test(name, () => {
        const { selector, property, value } = target.element
        expect(component.find(selector).props()).toHaveProperty(property, value)
      })
      break

    case 'check length':
      test(name, () => {
        const { parent, child, length } = target.element
        const wrapper = component.find(parent)
        expect(wrapper.find(child)).toHaveLength(length)
      })
      break

    case 'check text':
      test(name, () => {
        const { selector, text, index = 0 } = target.element
        const wrapper = component.find(selector).at(index)
        expect(wrapper.text()).toBe(text)
      })
      break
    default:
      return console.log('Define Test')
  }
}
