import { useRef, useState, useEffect, ReactEventHandler } from "react"

import CameraRecordingIcon from "~/components/assets/svg/camera-recording.svg"
import EmitterVideo from "~/components/assets/svg/icons/emitter-vide.svg"
import UploadVIdeo from "~/components/assets/svg/icons/upload-video.svg"

import styles from "~/styles/app/Video.module.css"

const items = [
    { title: "Subir video", href: "#", Icon: UploadVIdeo },
    { title: "Emitir en directo", href: "#", Icon: EmitterVideo },
]

const Video = () => {
    const ref = useRef(null)
    const [showList, setShowList] = useState(false)

    useEffect(() => {
        const handleClickOutside = (e: any) => {
            //@ts-ignore
            if (ref.current && !ref.current.contains(e.target)) {
                setShowList(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        };
    }, [])

    return (
        <div className={styles.box} ref={ref} >
            <div onClick={() => setShowList(!showList)}>
                <CameraRecordingIcon />
            </div>
            <div className={styles.boxList} style={{display: showList ? "block" : "none"}}>
                <ul>
                    {
                        items.map((item, i) => {

                            return (
                                <li key={i}>
                                    <div className={styles.boxIcon}><item.Icon /></div>
                                    <span>{item.title}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Video