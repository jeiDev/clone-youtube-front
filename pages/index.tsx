import type { NextPage } from 'next'
import Layout from '~/components/layout'
import useSettingContext from "~/contexts/hooks/setting.context"

const Home: NextPage = () => {
  const settingContext = useSettingContext()

  return (
    <Layout>
        <h1 style={{textAlign: "center"}}>Youtube Clone</h1>
        <div style={{display: "flex"}}>
          <input type="checkbox" onChange={(e) => {
            const value = e.target.checked;
            console.log({value})
            settingContext?.setTheme(value ? "dark" : "light")
          }}/>
          <span>Dark mode</span>
        </div>
    </Layout>
  )
}

export default Home
