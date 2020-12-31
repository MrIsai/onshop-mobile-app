import { createContext } from "react";
import { AccountInterface } from "./utils/TypesAndIntefaces";

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
    setAccount: (v: AccountInterface) => void;
};

export const AppContext = createContext<AppContextType>({
    authenticated: false,
    setAuthenticated: () => false,
    account: null,
    setAccount: () => null,
});
