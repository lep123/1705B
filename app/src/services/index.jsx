import a from "./api.js"
import { post } from '@/utils/request'
export function login(v){
    return post(a.log,v)
}
export function ce(v){
    return post(a.reg,v)
}