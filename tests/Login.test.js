import { describe, expect, it,  } from 'vitest'
import { mount } from '@vue/test-utils'
import Login from '../src/views/LoginView.vue'
import RegisterView from '../src/views/RegisterView.vue'

describe('Startup', () => {
  it('Should render', () => {
    const wrapper = mount(Login)

    expect(wrapper.find('form').exists()).toBeTruthy()
    expect(wrapper.find('footer>a').exists()).toBeTruthy()
  })
})

describe('Register', () => {
  it('Should render', () => {
    const wrapper = mount(RegisterView)

    expect(wrapper.find('form').exists()).toBeTruthy()
  })

  it('Should decline invalid emails', async () => {
    const wrapper = mount(RegisterView)

    await wrapper.get('input#emailfield').setValue('invalid.email@email.com')
    
    expect(wrapper.find('.form-field>.errormessage').toBeTruthy())
  })
})