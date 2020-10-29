import Layout from '../components/Layout.jsx'
import ChannelGrid from '../components/ChannelGrid.jsx'
import Error from 'next/error'

export async function getServerSideProps() {
    try {
        let req = await fetch('https://api.audioboom.com/channels/recommended')
        let { body: channels } = await req.json()
        return { props: { data: { channels, statusCode: 200 }}}
    } catch (error) {
        res.statusCode = 503
        return { props: { data: { channels: null, statusCode: 503 }}}
    }
}

export default function ({data}) {
    const { channels, statusCode } = data

    if (statusCode!=200) {
        return <Error statusCode={statusCode}></Error>
    }

    return <Layout title="Podcasts">
        <ChannelGrid channels={channels} />
    </Layout>
}