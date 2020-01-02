import { DODATA } from '@/constants'

const obj = {
    'data': [],
}

export default function (state = obj, action) {
    switch (action.type) {
        case DODATA:
            return {...state, data: action.payload.data.users}
    
        default:
            return state
    }
}