import Header from '../components/header'

const layoutStyle = {
  margin: 5,
  padding: 20,
  backgroundColor: "#DCDCDC",
}

const Layout = props => (
  <div style={layoutStyle}>
    {props.children}
  </div>
)

export default Layout