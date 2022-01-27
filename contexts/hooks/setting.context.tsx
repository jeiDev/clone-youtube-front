import React, { useContext, createContext } from 'react'
import { ContextConsumerPropsI, ContextProviderPropsI, SettingContextI } from '~/interfaces/context/setting/setting.interface'

export const SettingContext = createContext<SettingContextI | null>(null)

export const SettingContextProvider = ({ children }: ContextProviderPropsI) => {
    const [theme, setTheme] = React.useState<string>('light')

    const values = React.useMemo(() => ({
        theme, setTheme
    }), [theme])

    return (
        //@ts-ignore
        <SettingContext.Provider value={values}>
            {children}
        </SettingContext.Provider>
    )
}

export const SettingContextConsumer = ({ children }: ContextConsumerPropsI) => {
    return (
        <SettingContext.Consumer>
            {(context: any) => {
                if (context === undefined) {
                    throw new Error('SettingContext must be used within a SettingProvider')
                }
                return children(context)
            }}
        </SettingContext.Consumer>
    )
}


const useSettingContext = (): SettingContextI | null => {
    const context = useContext(SettingContext);

    if (!context) {
        console.error("Error deploying Setting Context")
    }

    return context
}

export default useSettingContext