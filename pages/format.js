import Layout from '../components/layout'

const Page = () => (
    <Layout>
        <title>Windows</title>
        <h1>Windows Format</h1>
        <div>
            <lu>OS available:
                <li>
                    <img src="../static/windows7.png"/>
                    <img src="../static/windows8.jpg"/>
                    <img src="../static/windows10.png"/>
                </li>
            </lu>
            <br></br>
            <lu>
                Price: RM30 (Student Price) | RM40 (Normal Price)
            </lu>
            <br></br>
            <br></br>
            <lu>
                <button> Place Order </button>
            </lu>
        </div>

        <style jsx>{`
            lu{
                list-style: none;
            }
            img{
                width: 100px;
                height: 100px;
                margin-right: 20px;
            }
        `}</style>
    </Layout>
)

export default Page