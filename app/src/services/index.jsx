import a from "./api.js"
import { post, get } from '@/utils/request'
import qs from "qs"
export function login(v) {
    return post(a.log, qs.stringify(v))
}
export function ce(v) {
    return post(a.reg, qs.stringify(v))
}
export function add(v) {
    return post(a.add, v)
}
export function addList() {
    return get(a.addList)
}
export function list(v) {
    return get(a.list, v)
}