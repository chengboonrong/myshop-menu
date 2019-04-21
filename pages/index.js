import Body from '../components/body'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import App from '../components/app'

const PostLink = item => (
  <Link href={`/${item.id}`}>
    <a>{item.title}</a>
  </Link>
)

const Index = () => (
  <div>
    <Header />
    <Body>
      <title>Home</title>
      <h1>Welcome to Shop_Name</h1>
        <li>
          <PostLink id="hardisk" title="Hardisk Upgrade"/>
        </li>
        <li>
          <PostLink id="ram" title="RAM Upgrade"/>
        </li>
        <li>
          <PostLink id="format" title="Windows Format"/>
        </li>
    </Body>
    <Footer/>
  </div>
)

export default Index