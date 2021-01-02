import { createContext } from "react";
import { Account } from "./utils/interfaces.utils";

type AppContextType = {
    authenticated: boolean;
    setAuthenticated: (v: boolean) => void;
    account: Account | null;
    setAccount: (v: Account) => void;
};

export const AppContext = createContext<AppContextType>({
    authenticated: false,
    setAuthenticated: () => false,
    account: null,
    setAccount: () => null,
});
