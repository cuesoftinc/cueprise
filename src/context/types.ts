import { Dispatch, SetStateAction, ReactNode } from "react";

export interface HomeContextProps {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
  newString: string;
  setNewString: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: any, form: any) => void;
}

export interface HomeProviderProps {
  children: ReactNode;
}
