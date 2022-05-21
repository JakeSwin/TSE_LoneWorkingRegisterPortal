import { describe, expect, it, spyOn } from 'vitest'
import { mount } from '@vue/test-utils'
import Login from '../src/views/LoginView.vue'

describe('Startup', () => {
  it('Should render', () => {
    const wrapper = mount(Login)

    expect(wrapper.find('form').exists()).toBeTruthy()
    expect(wrapper.find('footer>a').exists()).toBeTruthy()
  })
})

// describe('Function calls', () => {
//   it('Should send login request on button click', async () => {
//     const wrapper = mount(Login)

//     expect(wrapper.find('form > button').exists()).toBe(true)

//     const spy = spyOn(wrapper.vm, 'sendLoginRequest')

//     console.log(wrapper.find('form > button').trigger('click'))

//     expect(wrapper.vm.sendLoginRequest).toBeCalled()
//   })
// })