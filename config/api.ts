export const PORT = 3003;
export const URL = `http://192.168.0.2:${PORT}`;

export default {
    auth: {
        login: `${URL}/auth/login`,
        signup: `${URL}/auth/signup`
    },

    // if you use this route, 
    // remember to add the user id at the url end
    users: {
        // HTTP GET to get user data
        // HTTP PUT to update
        // HTTP DELETE to delete user
        url: `${URL}/users/`,
        addresses: {} 
    }
}