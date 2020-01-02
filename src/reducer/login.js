import { DOLOGIN } from '@/constants'

const obj = {
    'username': '',
}

export default function (state = obj, action) {
    switch (action.type) {
        case DOLOGIN:
            return {...state, username: localStorage.getItem('username')}
    
        default:
            return state
    }
}