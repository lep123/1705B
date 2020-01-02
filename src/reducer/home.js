import { HOMEDATA} from '../constants/actionTypes'

const initState = {
    token: '',
}

export default function (state = initState, action) {
    switch (action.type) {
        case HOMEDATA:
            return { ...state, token: action.payload }
        default:
            return state
    }
}