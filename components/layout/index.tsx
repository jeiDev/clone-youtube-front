import { LayoutPropsI } from "~/interfaces/layout"
import Header from "./header"

const Layout = ({children}: LayoutPropsI) => {

    return(
        <div>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout