import { useRef, useState, useEffect } from "react"

import MenuSquaresIcon from "~/components/assets/svg/menu-squares.svg"
import YTArtists from "~/components/assets/svg/icons/yt-artists.svg"
import YTKids from "~/components/assets/svg/icons/yt-kids.svg"
import YTMusic from "~/components/assets/svg/icons/yt-music.svg"
import YTtv from "~/components/assets/svg/icons/yt-tv.svg"

import styles from "~/styles/app/Applications.module.css"

const items = [
    [
        { title: "YouTube TV", href: "#", Icon: YTtv },
    ],
    [
        { title: "YouTube Music", href: "#", Icon: YTMusic },
        { title: "YouTube Kids", href: "#", Icon: YTKids }
    ],
    [
        { title: "YouTube para Artistas", href: "#", Icon: YTArtists }
    ]
]

const Applications = () => {
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
                <MenuSquaresIcon />
            </div>
            <div className={styles.boxList} style={{display: showList ? "block" : "none"}}>
                <ul>
                    {
                        items.map((item, i) => {

                            return (
                                <li key={i}>
                                    <ul>
                                        {item.map((_item, e) => (
                                            <li key={e} className={styles.list}>
                                                <div className={styles.boxIcon}><_item.Icon /></div>
                                                <span>{_item.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Applications