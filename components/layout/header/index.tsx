import { HeaderPropsI } from "~/interfaces/layout"

import HeaderCenter from "./center"
import HeaderLeft from "./left"
import HeaderRight from "./right"

import style from "~/styles/layout/header/Header.module.css"

const Header = ({}: HeaderPropsI) => {

    return(
        <header className={style.header}>
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
        </header>
    )
}

export default Header