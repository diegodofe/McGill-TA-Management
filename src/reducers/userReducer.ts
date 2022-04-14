import { UserType } from "../types/userType";

export const initialState: UserType = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    uuid: '',
    studentID: '',
    userType: ''
}

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}