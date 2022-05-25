import { describe, expect, it, spyOn, fn } from 'vitest'
import { shallowMount, mount } from "@vue/test-utils"
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from "../src/router/index.js"

import StudentDashboard from '../src/components/dashboards/StudentDashboard.vue'

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
        const wrapper = mount(StudentDashboard, mountConfig)

        expect(wrapper.find('h3').text()).toBe("Update Room:")
    })
})