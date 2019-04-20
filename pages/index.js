import Layout from '../components/layout'
import Link from 'next/link'
import Header from '../components/header'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';

const PostLink = item => (
  <Link href={`/${item.id}`}>
    <a>{item.title}</a>
  </Link>
)

const Index = () => (
  <div>
    <Header />
    <Layout>
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
    </Layout>
  </div>
)

export default Index