import { reactive } from '@vue/reactivity'

const debug = true;

const state = reactive({
    isLoggedIn: false,
    studentID: '',
    roomNumber: '',
    isAdmin: false
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
    setRoomNumber(newValue) {
        if (debug) {
            console.log('setRoomNumber triggered with ', newValue)
        }

        state.roomNumber = newValue
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
    getRoomNumber() {
        return state.roomNumber
    },
    getIsAdmin() {
        return state.isAdmin
    }
}

export default store