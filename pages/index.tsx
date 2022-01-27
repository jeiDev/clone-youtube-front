import type { NextPage } from 'next'
import Layout from '~/components/layout'
import useSettingContext from "~/contexts/hooks/setting.context"
const Home: NextPage = () => {
  useSettingContext()
  return (
    <Layout>
        <h1 style={{textAlign: "center"}}>Youtube Clone</h1>
    </Layout>
  )
}

export default Home
