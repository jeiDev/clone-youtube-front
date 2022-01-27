import { ReactNode } from "react";

export interface SettingContextI {
    theme: string
    setTheme: Function
}

export interface ContextProviderPropsI {
    children: ReactNode
}

export interface ContextChildrenConsumerFunctionI{
    (params: SettingContextI): ReactNode
}

export interface ContextConsumerPropsI {
    children: ContextChildrenConsumerFunctionI
}