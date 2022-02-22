import type { NextPage } from 'next'
import Layout from '~/components/layout'
import Sidebar from "~/components/app/Sidebar"
import useSettingContext from "~/contexts/hooks/setting.context"

import styles from "~/styles/pages/Home.module.css"

const Home: NextPage = () => {
  const settingContext = useSettingContext()

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.main}>
          <h1 style={{ textAlign: "center" }}>Youtube Clone</h1>
          <div style={{ display: "flex" }}>
            <input type="checkbox" onChange={(e) => {
              const value = e.target.checked;
              console.log({ value })
              settingContext?.setTheme(value ? "dark" : "light")
            }} />
            <span>Dark mode</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
