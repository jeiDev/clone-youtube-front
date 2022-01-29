import { HeaderPropsI } from "~/interfaces/layout"
import CameraRecordingIcon from "~/components/assets/svg/camera-recording.svg"
import MenuSquaresIcon from "~/components/assets/svg/menu-squares.svg"
import NotificationIcon from "~/components/assets/svg/notification.svg"

import style from "~/styles/layout/header/Header.module.css"

const HeaderRight = ({}: HeaderPropsI) => {

    return(
        <div className={style.right}>
            <div>
                <CameraRecordingIcon />
            </div>
            <div>
                <MenuSquaresIcon />
            </div>
            <div>
                <NotificationIcon />
            </div>
        </div>
    )
}

export default HeaderRight