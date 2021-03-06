import { describe, expect, it, spyOn, fn } from 'vitest'
import { shallowMount, mount } from "@vue/test-utils"

const mockRouter = {
  push: fn()
}

const mountConfig = {
  global: {
    stubs: ['router-link'],
    mocks: {
      $router: mockRouter
    }
  }
}

import Login from '../src/views/LoginView.vue'

describe('Startup', () => {
  it('Should render', async () => {
    const wrapper = mount(Login, mountConfig)

    expect(wrapper.find('form').exists()).toBeTruthy()
    expect(wrapper.find('footer>a').exists()).toBeTruthy()
  })
})

describe('Function calls', () => {
  it('Should send login request on button click', async () => {
    const wrapper = mount(Login, mountConfig)

    expect(wrapper.find('form > button').exists()).toBe(true)

    const spy = spyOn(wrapper.vm, 'sendLoginRequest')

    await wrapper.find('form > button').trigger('click')

    expect(wrapper.vm.sendLoginRequest).toBeCalled()
  })

  it('Should send correct data on login request', async () => {
    const wrapper = mount(Login, mountConfig)

    const spy2 = spyOn(global, 'fetch').mockResolvedValue({
      isLoggedIn: true,
      studentID: '22102208',
      isSignedIn: false,
      isAdmin: false
    })

    const data = {
      email: '22104408@students.lincoln.ac.uk',
      password: 'Ab18Xc999'
    }

    await wrapper.get('input[name="email"]').setValue(data.email)
    await wrapper.get('input[name="password"]').setValue(data.password)
    await wrapper.find('form > button').trigger('click')

    expect(global.fetch).toHaveBeenCalledOnce()
  })
})