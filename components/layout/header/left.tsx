import { HeaderPropsI } from "~/interfaces/layout"
import MenuIcon from "~/components/assets/svg/menu.svg"
import YoutubeIcon from "~/components/assets/svg/youtube-logo.svg"

import style from "~/styles/layout/header/Header.module.css"

const HeaderLeft = ({}: HeaderPropsI) => {

    return(
        <div className={style.left}>
            <div className={style.boxMenu}>
                <MenuIcon />
            </div>

            <div className={style.logo}>
                <YoutubeIcon />
                <span>DO</span>
            </div>
        </div>
    )
}

export default HeaderLeft