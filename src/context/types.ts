import { Dispatch, SetStateAction, ReactNode } from "react";

export interface HomeContextProps {
  homeState: number;
  setHomeState: Dispatch<SetStateAction<number>>;
  newString: string;
  setNewString: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: any, form: any) => void;
}

export interface HomeProviderProps {
  children: ReactNode;
}