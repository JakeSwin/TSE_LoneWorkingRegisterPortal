import { describe, expect, it, spyOn, fn, beforeEach } from 'vitest'
import { shallowMount, mount, flushPromises } from "@vue/test-utils"
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from "../src/router/index.js"

import Login from '../src/views/LoginView.vue'

let router;
beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes: routes
  })
})

describe('Startup', () => {
  it('Should render', async () => {
    router.push('/login')
    await router.isReady()

    const wrapper = mount(Login, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.find('form').exists()).toBeTruthy()
    expect(wrapper.find('footer>a').exists()).toBeTruthy()
  })
})

describe('Function calls', () => {
  it('Should send login request on button click', async () => {
    router.push('/login')

    await router.isReady()

    const wrapper = mount(Login, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.find('form > button').exists()).toBe(true)

    const spy = spyOn(wrapper.vm, 'sendLoginRequest')

    await wrapper.find('form > button').trigger('click')

    expect(wrapper.vm.sendLoginRequest).toBeCalled()
  })

  it('Should send correct data on login request', async () => {
    router.push('/login')

    await router.isReady()

    const wrapper = mount(Login, {
      global: {
        plugins: [router]
      }
    })

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
    expect(global.fetch).toHaveBeenCalledWith(
      '/backend/api/register',
      {
        headers: {
          'content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data),
        method: 'POST'
      }
    )
  })
})