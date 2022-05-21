import { describe, expect, it, spyOn } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import DashboardView from '../src/views/DashboardView.vue'

describe('Startup', () => {
    it('Should render', () => {
        const wrapper = shallowMount(DashboardView)

        expect(wrapper.find('header > h2').text()).toBe("DASHBOARD")
    })
})

describe('Function Calls', () => {
    it('Should toggle task bar', async () => {
        const wrapper = shallowMount(DashboardView)

        expect(wrapper.find('.menu-mask').exists()).toBe(true)

        const spy = spyOn(wrapper.vm, 'toggleShowTaskBar')

        await wrapper.get('.menu-mask').trigger('click')

        expect(wrapper.vm.toggleShowTaskBar).toBeCalled()

        expect(wrapper.vm.taskBarVisible).toBe(true)
    })
})