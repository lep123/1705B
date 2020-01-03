const Login= {
    name:""
}
export default function users(state = Login, action) {
    switch (action.type) {
        case "LOGIN":
            return { ...state , ...{name:action.payload.username}}
        default:
            return { ...state }
    }
}