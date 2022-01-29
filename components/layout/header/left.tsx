import { HeaderPropsI } from "~/interfaces/layout"
import MenuIcon from "~/components/assets/svg/menu.svg"
import YoutubeIconLight from "~/components/assets/svg/youtube-logo-light.svg"
import YoutubeIconDark from "~/components/assets/svg/youtube-logo-dark.svg"
import useSettingContext from "~/contexts/hooks/setting.context"

import style from "~/styles/layout/header/Header.module.css"

const HeaderLeft = ({}: HeaderPropsI) => {
    const settingContext = useSettingContext()
    
    return(
        <div className={style.left}>
            <div className={style.boxMenu}>
                <MenuIcon />
            </div>

            <div className={style.logo}>
                {settingContext?.theme == "dark" ? 
                (<YoutubeIconDark />) : (<YoutubeIconLight />)} 
                <span>DO</span>
            </div>
        </div>
    )
}

export default HeaderLeft