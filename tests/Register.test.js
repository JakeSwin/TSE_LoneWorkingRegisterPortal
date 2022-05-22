import { describe, expect, it, } from 'vitest'
import { mount } from '@vue/test-utils'
import Register from '../src/components/register_pages/Register.vue'

describe('Startup', () => {
    it('Should render', () => {
        const wrapper = mount(Register)

        expect(wrapper.find('form').exists()).toBeTruthy()
    })
})

describe('Invalid fields', () => {
    it('Should decline invalid emails', async () => {
        const wrapper = mount(Register)

        await wrapper.get('input[name="email"]').setValue('invalid.email@email.com')

        expect(wrapper.get('.error-message').text()).toBe('Email only accepts valid University Of Lincoln Emails')
    })

    it('Should decline invalid passwords', async () => {
        const wrapper = mount(Register)

        await wrapper.get('input[name="password"]').setValue('123')

        expect(wrapper.get('.error-message').text()).toBe('Password must be at least 8 characters long with digits, uppercase and lowercase')
    })

    it('Should decline passwords that do not match', async () => {
        const wrapper = mount(Register)

        await wrapper.get('input[name="password"]').setValue('Ab18Xc999')

        await wrapper.get('input[name="re-password"]').setValue('different')

        expect(wrapper.get('.error-message').text()).toBe('Passwords do not match')
    })
})

describe('Valid fields', () => { 
    it('Should accept valid emails', async () => {
        const wrapper = mount(Register)

        await wrapper.get('input[name="email"]').setValue('22104408@students.lincoln.ac.uk')

        expect(wrapper.find('.error-message').exists()).toBe(false)
    })

    it('Should accept valid passwords', async () => {
        const wrapper = mount(Register)

        await wrapper.get('input[name="password"]').setValue('Ab18Xc999')

        expect(wrapper.find('.error-message').exists()).toBe(false)
    })

    it('Should accept passwords that match', async () => {
        const wrapper = mount(Register)

        await wrapper.get('input[name="password"]').setValue('Ab18Xc999')

        await wrapper.get('input[name="re-password"]').setValue('Ab18Xc999')

        expect(wrapper.find('.error-message').exists()).toBe(false)
    })
})