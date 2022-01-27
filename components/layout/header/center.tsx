import { HeaderPropsI } from "~/interfaces/layout"
import SearchIcon from "~/components/assets/svg/search.svg"
import RecorderIcon from "~/components/assets/svg/recorder.svg"

import style from "~/styles/layout/header/Header.module.css"

const HeaderCenter = ({}: HeaderPropsI) => {

    return(
        <div className={style.center}>
            <div className={style.boxSearch}>
                <input type="text" placeholder="Buscar"/>
                <div className={style.buttonSearch}>
                    <SearchIcon />
                </div>
            </div>
            <div>
                <RecorderIcon />
            </div>
        </div>
    )
}

export default HeaderCenter