import Layout from '../components/layout'
import Link from 'next/link'

const PostLink = item => (
    <li>
    <Link as={`/${item.id}`} href={`/post?title=${item.title}`}>
      <a>{item.title}</a>
    </Link>
  </li>
)

const Index = () => (
    <Layout>
        <title>Home</title>
        <h1>Welcome to Shop_Name</h1>
        <ul>
            <PostLink id="hardisk" title="Hardisk Upgrade"/>
            <PostLink id="ram" title="RAM Upgrade"/>
            <PostLink id="format" title="Windows Format"/>
        </ul>

    </Layout>
)

export default Index