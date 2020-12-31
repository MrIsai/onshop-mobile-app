export interface Account {
    name: {
        first: string;
        last: string;
    },

    email: string;
    password: string;
    token: string;
}