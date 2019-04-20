import Layout from '../components/layout'

const Page = () => (
    <Layout>
        <title>RAM</title>
        <h1>RAM Upgrade</h1>
        <div id="laptop">
            <h3>Laptop</h3>
            <table border="1">
                <tr>
                    <th>Type</th>
                    <th>Size</th>
                    <th>Price Range</th>
                </tr>
                <tr>   
                    <td>DDR3</td>
                    <td>2GB</td>
                    <td>RM</td>
                    <td><button>Order</button></td>
                </tr>
                <tr>   
                    <td></td>
                    <td>4GB</td>
                    <td>RM</td>
                    <td><button>Order</button></td>
                </tr>
                <tr>   
                    <td></td>
                    <td>8GB</td>
                    <td>RM</td>
                    <td><button>Order</button></td>
                </tr>
                <tr>   
                    <td>DDR4</td>
                    <td>4GB</td>
                    <td>RM</td>
                    <td><button>Order</button></td>
                </tr>
                <tr>   
                    <td></td>
                    <td>8GB</td>
                    <td>RM</td>
                    <td><button>Order</button></td>
                </tr>
                <tr>   
                    <td></td>
                    <td>16GB</td>
                    <td>RM</td>
                    <td><button>Order</button></td>
                </tr>
                
            </table>
        </div>

        <div id="dekstop">
            <h3>Desktop</h3>
            <table border="1">
                <tr>
                    <th>Type</th>
                    <th>Size</th>
                    <th>Price Range</th>
                </tr>
                <tr>   
                    <td>DDR3</td>
                    <td>2GB</td>
                    <td>RM</td>
                    <td><button>Order</button></td>
                </tr>
                <tr>   
                    <td></td>
                    <td>4GB</td>
                    <td>RM</td>
                    <td><button>Order</button></td>
                </tr>
                <tr>   
                    <td></td>
                    <td>8GB</td>
                    <td>RM</td>
                    <td><button>Order</button></td>
                </tr>
                <tr>   
                    <td>DDR4</td>
                    <td>4GB</td>
                    <td>RM</td>
                    <td><button>Order</button></td>
                </tr>
                <tr>   
                    <td></td>
                    <td>8GB</td>
                    <td>RM</td>
                    <td><button>Order</button></td>
                </tr>
                <tr>   
                    <td></td>
                    <td>16GB</td>
                    <td>RM</td>
                    <td><button>Order</button></td>
                </tr>
                
            </table>
        </div>

        <style jsx>{`
            #laptop,
            #dekstop{
                display: inline-block;
                position: relative;
                margin-right: 50px;
            }
        `}</style>
    </Layout>
)

export default Page