import { reactive } from '@vue/reactivity'

const debug = true;

const state = reactive({
    isLoggedIn: false,
    studentID: '',
    isSignedIn: false,
    isAdmin: true
})

const store = {
    setLoggedIn(newValue) {
        if (debug) {
            console.log('setLoggedIn triggered with ', newValue)
        }

        state.isLoggedIn = newValue
    },
    setStudentID(newValue) {
        if (debug) {
            console.log('setStudentID triggered with ', newValue)
        }

        state.studentID = newValue
    },
    setSignedIn(newValue) {
        if (debug) {
            console.log('setSignedIn triggered with ', newValue)
        }

        state.isSignedIn = newValue
    },
    setIsAdmin(newValue) {
        if (debug) {
            console.log('setIsAdmin triggered with ', newValue)
        }

        state.isAdmin = newValue
    },
    getIsLoggedIn() {
        return state.isLoggedIn
    },
    getStudentID() {
        return state.studentID
    },
    getIsSignedIn() {
        return state.isSignedIn
    },
    getIsAdmin() {
        return state.isAdmin
    }
}

export default store