export interface Account {
    id: string;
    name: {
        first: string;
        last: string;
    },

    email: string;
    password: string;
    token: string;
}

export interface AuthResponse {
    status: boolean;
    message?: string;
    token?: string;
    email?: string;
    id?: string;
    name?: {
        first: string;
        last: string;
    }
}