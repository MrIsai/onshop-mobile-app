import { createContext } from "react";
import { Account } from "./utils/TypesAndIntefaces";

type AppContextType = {
    authenticated: boolean;
    setAuthenticated: (v: boolean) => void;
    account: {
        name: {
            first: string;
            last: string;
        };

        email: string;
        password: string;
        token: string;
    } | null;
    setAccount: (v: Account) => void;
};

export const AppContext = createContext<AppContextType>({
    authenticated: false,
    setAuthenticated: () => false,
    account: null,
    setAccount: () => null,
});
