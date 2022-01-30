import { HeaderPropsI } from "~/interfaces/layout"

import NotificationIcon from "~/components/assets/svg/notification.svg"
import Applications from "~/components/app/Applications"
import Video from "~/components/app/Video"

import style from "~/styles/layout/header/Header.module.css"

const HeaderRight = ({}: HeaderPropsI) => {

    return(
        <div className={style.right}>
            <Video />
            <Applications />
            <div>
                <NotificationIcon />
            </div>
        </div>
    )
}

export default HeaderRight