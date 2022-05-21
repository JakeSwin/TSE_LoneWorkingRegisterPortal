import { describe, expect, it, spyOn } from 'vitest'
import { mount } from '@vue/test-utils'
import Verify from '../src/components/register_pages/Verify.vue'

describe('Startup', () => {
    it('Should render', () => {
        const wrapper = mount(Verify)

        expect(wrapper.find('form').exists()).toBeTruthy()
    })
})

describe('Function calls', () => {
    it('Should send confirmation code on button click', async () => {
        const wrapper = mount(Verify)

        expect(wrapper.find('form > button').exists()).toBe(true)

        const spy = spyOn(wrapper.vm, 'sendConfirmationCode')

        await wrapper.get('form > button').trigger('click')

        expect(wrapper.vm.sendConfirmationCode).toBeCalled()
    })
})