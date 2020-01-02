const Login= {
    username:"",
    password:""
}
export default function users(state = Login, action) {
    switch (action.type) {
        case "USERS":
            return { ...action.payload }
        default:
            return { ...state }
    }
}