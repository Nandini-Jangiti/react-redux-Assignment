
import { createStore } from 'redux';

const initialState = {
    user: {
        name: 'Nandini',
        country: 'India',
        gender: 'Female',
        pan: '123445678',
        education: {
            tenth: { instituteName: 'St.Agnes', cgpa: '8' },
            higherSecondary: { instituteName: 'Acts', cgpa: '9' },
            graduation: { instituteName: 'VGNT', cgpa: '7.5' },
        },
        certifications: [],
    },
};


const SET_USER_DETAILS = 'SET_USER_DETAILS';
const ADD_CERTIFICATION = 'ADD_CERTIFICATION';


export const setUserDetails = (userDetails) => ({
    type: SET_USER_DETAILS,
    payload: userDetails,
});

export const addCertification = (certification) => ({
    type: ADD_CERTIFICATION,
    payload: certification,
});


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DETAILS:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload,
                },
            };
        case ADD_CERTIFICATION:
            return {
                ...state,
                user: {
                    ...state.user,
                    certifications: [...state.user.certifications, action.payload],
                },
            };
        default:
            return state;
    }
};


const store = createStore(reducer);

export default store;