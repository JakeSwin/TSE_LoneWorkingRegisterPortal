import { describe, expect, it, spyOn, fn, beforeEach } from 'vitest'
import { shallowMount, mount, flushPromises } from "@vue/test-utils"
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from "../src/router/index.js"

import Register from '../src/components/register_pages/Register.vue'

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

describe('Startup', () => {
    it('Should render', () => {
        const wrapper = shallowMount(Register, mountConfig)

        expect(wrapper.find('form').exists()).toBeTruthy()
    })
})

describe('Invalid fields', () => {
    it('Should decline invalid emails', async () => {
        const wrapper = shallowMount(Register, mountConfig)

        await wrapper.get('input[name="email"]').setValue('invalid.email@email.com')

        expect(wrapper.get('.error-message').text()).toBe('Email only accepts valid University Of Lincoln Emails')
    })

    it('Should decline invalid passwords', async () => {
        const wrapper = shallowMount(Register, mountConfig)

        await wrapper.get('input[name="password"]').setValue('123')

        expect(wrapper.get('.error-message').text()).toBe('Password must be at least 8 characters long with digits, uppercase and lowercase')
    })

    it('Should decline passwords that do not match', async () => {
        const wrapper = shallowMount(Register, mountConfig)

        await wrapper.get('input[name="password"]').setValue('Ab18Xc999')

        await wrapper.get('input[name="re-password"]').setValue('different')

        expect(wrapper.get('.error-message').text()).toBe('Passwords do not match')
    })
})

describe('Valid fields', () => { 
    it('Should accept valid emails', async () => {
        const wrapper = shallowMount(Register, mountConfig)

        await wrapper.get('input[name="email"]').setValue('22104408@students.lincoln.ac.uk')

        expect(wrapper.find('.error-message').exists()).toBe(false)
    })

    it('Should accept valid passwords', async () => {
        const wrapper = shallowMount(Register, mountConfig)

        await wrapper.get('input[name="password"]').setValue('Ab18Xc999')

        expect(wrapper.find('.error-message').exists()).toBe(false)
    })

    it('Should accept passwords that match', async () => {
        const wrapper = shallowMount(Register, mountConfig)

        await wrapper.get('input[name="password"]').setValue('Ab18Xc999')

        await wrapper.get('input[name="re-password"]').setValue('Ab18Xc999')

        expect(wrapper.find('.error-message').exists()).toBe(false)
    })
})

describe('Valid function behavior', async () => {
    const wrapper = shallowMount(Register, mountConfig)

    const spy_method = spyOn(wrapper.vm, 'sendRegisterRequest')
    const spy_fetch = spyOn(global, 'fetch').mockResolvedValue({
        status: 200,
        json() {
            return {
                logged_in: true
            }
        }
    })

    await wrapper.get('input[name="email"]').setValue('22104408@students.lincoln.ac.uk')
    await wrapper.get('input[name="password"]').setValue('Ab18Xc999')
    await wrapper.get('input[name="re-password"]').setValue('Ab18Xc999')

    it('Should not have any error messages', async () => {
        expect(wrapper.find('.error-message').exists()).toBe(false)
    })

    await wrapper.get('form > button').trigger('click')

    it('Should call the sendRegisterRequest function', () => {
        expect(wrapper.vm.sendRegisterRequest).toBeCalled()
    })

    it('Should fetch from the API', async () => {
        expect(global.fetch).toHaveBeenCalled()
    })

    it('Should not have any error messages after API call', () => {
        expect(wrapper.find('.error-message').exists()).toBe(false)
    })
})

describe('Invalid Function behavior', async () => {
    const wrapper = shallowMount(Register, mountConfig)

    const spy_method = spyOn(wrapper.vm, 'sendRegisterRequest')

    await wrapper.get('input[name="email"]').setValue('invalidemail@email.com')
    await wrapper.get('input[name="password"]').setValue('pass')
    await wrapper.get('input[name="re-password"]').setValue('pass')

    it('Should have error messages', async () => {
        expect(wrapper.find('.error-message').exists()).toBe(true)
    })

    await wrapper.get('form > button').trigger('click')

    it('Should call the sendRegisterRequest function', async () => {
        expect(wrapper.vm.sendRegisterRequest).toBeCalled()
    })

    it("Should have not emitted the registerSubmit emit", async () => {
        await wrapper.get('form > button').trigger('click')

        expect(wrapper.emitted()).not.toHaveProperty('registerSubmitted')
    })
})