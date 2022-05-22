import { describe, expect, it, spyOn, fn } from 'vitest'
import { shallowMount, mount} from "@vue/test-utils"
import { createRouter, createWebHistory }from 'vue-router'
import { routes } from "../src/router/index.js"

import AdminDashboard from '../src/components/dashboards/AdminDashboard.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

describe('Startup', () => {
    it('Should render', async () => {
        router.push('/dashboard')

        await router.isReady()

        const wrapper = mount(AdminDashboard, {
            global: {
                plugins: [router]
            }
        })

        expect(wrapper.find('h4').text()).toBe("Signed In Students:")
    })
})

// describe('Function Calls', () => {
//     it('Should toggle task bar', async () => {
//         const $route = {
//             name: 'dashboard'
//         }

//         const wrapper = shallowMount(AdminDashboard, {
//             mocks: {
//                 $route
//             }
//         })

//         expect(wrapper.find('header > h2').text()).toBe("DASHBOARD")
//     })
// })

// describe('Function calls', () => {
//     it('Should send confirmation code on button click', async () => {
//         const wrapper = mount(Verify)

//         expect(wrapper.find('form > button').exists()).toBe(true)

//         const spy = spyOn(wrapper.vm, 'sendConfirmationCode')

//         await wrapper.get('form > button').trigger('click')

//         expect(wrapper.vm.sendConfirmationCode).toBeCalled()
//     })
// })