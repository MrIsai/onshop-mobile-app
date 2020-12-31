export interface AccountInterface {
    name: {
        first: string;
        last: string;
    },

    email: string;
    password: string;
    token: string;
}