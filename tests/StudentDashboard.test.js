import { describe, expect, it, spyOn, fn } from 'vitest'
import { shallowMount, mount } from "@vue/test-utils"
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from "../src/router/index.js"

import StudentDashboard from '../src/components/dashboards/StudentDashboard.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

describe('Startup', () => {
    it('Should render', async () => {
        router.push('/dashboard')

        await router.isReady()

        const wrapper = mount(StudentDashboard, {
            global: {
                plugins: [router]
            }
        })

        expect(wrapper.find('h3').text()).toBe("Update Room:")
    })
})