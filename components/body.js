import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';

const bodyStyle = {
  margin: 1,
  padding: 50,
  height: '200vh',
  borderStyle: 'solid',
  backgroundColor: 'lightblue'
}

const Body = props => (
  <div style={bodyStyle}>
    {props.children}
  </div>
)

export default Body