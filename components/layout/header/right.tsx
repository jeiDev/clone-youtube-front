import { HeaderPropsI } from "~/interfaces/layout"
import CameraRecordingIcon from "~/components/assets/svg/camera-recording.svg"
import MenuSquaresIcon from "~/components/assets/svg/menu-squares.svg"
import NotificationIcon from "~/components/assets/svg/notification.svg"

const HeaderRight = ({}: HeaderPropsI) => {

    return(
        <div>
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