import { describe, expect, it,  } from 'vitest'
import { mount } from '@vue/test-utils'
import Login from '../src/views/Login.vue'
import RegisterView from '../src/views/RegisterView.vue'

describe('Startup', () => {
  it('Should render', () => {
    const wrapper = mount(Login)

    expect(wrapper.find('form').exists()).toBeTruthy()
    expect(wrapper.find('footer>a').exists()).toBeTruthy()
  })

  it('Should navigate to register', async () => {
    const wrapper = mount(Login)
    
    await wrapper.find('footer>a').trigger('click')
  })
})

describe('Register', () => {
  it('Should render', () => {
    const wrapper = mount(RegisterView)

    expect(wrapper.find('form').exists()).toBeTruthy()
  })

  it('Should navigate to send code', async () => {
    const wrapper = mount(RegisterView)

    await wrapper.find('form>button').trigger('click')

    expect(wrapper.find('form>button').html().includes('Verify Account'))
  })
})