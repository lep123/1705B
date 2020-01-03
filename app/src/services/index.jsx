import a from "./api.js"
import { post } from '@/utils/request'
import qs from "qs"
export function login(v) {
    return post(a.log, qs.stringify(v))
}
export function ce(v) {
    return post(a.reg, qs.stringify(v))
}