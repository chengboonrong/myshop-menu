import Body from '../components/body'
import Header from '../components/header'

const Page = () => (
    <div>
        <Header />
        <Layout>
            <title>Hardisk</title>
            <h1>Hardisk Upgrade</h1>
            <div>
                <table border="1">
                    <tr>
                        <th>Storage</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>120GB</td>
                        <td>RM140</td>
                        <td><button>Order</button></td>
                    </tr>
                    <tr>
                        <td>240GB</td>
                        <td>RM200</td>
                        <td><button>Order</button></td>
                    </tr>
                    <tr>
                        <td>480GB</td>
                        <td>RM260</td>
                        <td><button>Order</button></td>
                    </tr>
                </table>

                <figure>
                    <img src="../static/SSD-vs-HDD.jpg" alt="ssd vs hdd" />
                </figure>
                
                <style jsx>{`
                    figure, table{
                        margin-bottom: 10px;
                    }
                `}</style>
            </div>
        </Layout>
    </div>
)

export default Page