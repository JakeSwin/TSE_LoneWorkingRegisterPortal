import { describe, expect, it, spyOn, fn, beforeEach } from 'vitest'
import { shallowMount, mount } from "@vue/test-utils"
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from "../src/router/index.js"

import Verify from '../src/components/register_pages/Verify.vue'

const mockRouter = {
    push: fn()
}

describe('Startup', () => {
    it('Should render', () => {
        const wrapper = shallowMount(Verify, {
            global: {
                stubs: ['router-link'],
                mocks: {
                    $router: mockRouter
                }
            }
        })

        expect(wrapper.find('form').exists()).toBeTruthy()
    })
})

describe('Valid Behavior', () => {
    it('Should verify on valid confirmation code', async () => {
        const wrapper = shallowMount(Verify, {
            global: {
                stubs: ['router-link'],
                mocks: {
                    $router: mockRouter
                }
            }
        })

        const spy_method = spyOn(wrapper.vm, 'sendConfirmationCode')
        const spy_fetch = spyOn(global, 'fetch').mockResolvedValue({
            status: 200
        })

        expect(wrapper.find('form > button').exists()).toBe(true)

        await wrapper.get('form > button').trigger('click')

        expect(wrapper.vm.sendConfirmationCode).toBeCalled()
        expect(global.fetch).toBeCalled()
        expect(mockRouter.push).toHaveBeenCalledOnce()
        expect(mockRouter.push).toHaveBeenCalledWith('/login')
    })
})

describe('Invalid Behavior', () => {
    it('Should not verify on invalid confirmation code', async () => {
        const wrapper = shallowMount(Verify, {
            global: {
                stubs: ['router-link'],
                mocks: {
                    $router: mockRouter
                }
            }
        })

        const spy_method = spyOn(wrapper.vm, 'sendConfirmationCode')
        const spy_fetch = spyOn(global, 'fetch').mockResolvedValue({
            status: 401
        })

        expect(wrapper.find('form > button').exists()).toBe(true)

        await wrapper.get('form > button').trigger('click')

        expect(wrapper.vm.sendConfirmationCode).toBeCalled()
        expect(global.fetch).toBeCalled()
        expect(wrapper.vm.errorMessage).toBe('Invalid Confirmation Code')
    })
})