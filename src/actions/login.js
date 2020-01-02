import { post, get } from '@/utils/request'
import { DOLOGIN } from '@/constants'
import api from '@/services/api'

export const dologin = (values) => {
    return {
        type: DOLOGIN,
        payload: post(api.login,values)
    }
}
