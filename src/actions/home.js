import { get } from '@/utils/request'
import { DODATA } from '@/constants'
import api from '@/services/api'

export const dodata = () => {
    return {
        type: DODATA,
        payload: get(api.data)
    }
}


