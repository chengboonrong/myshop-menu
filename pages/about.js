import Body from '../components/body'
import Header from '../components/header'
import fetch from 'isomorphic-unfetch'

const About = props => (
    <div>
        <Header />
        <Body>
        <title>About</title>
        {/* <img src={props.data.avatar_url}/> */}
        <p>Author: {props.data.login}</p>
        <p>Email: chengchris8715@gmail.com</p>
        <p>Personal Website: <a href="https://chengboonrong.github.io/edgerisme-docs/" target="_blank">EDGER - My Personal Website</a></p>
        <p>Github: <a href={props.data.html_url} target="_blank">{props.data.html_url}</a></p>
        <table>
            <tr>
                <th>Repository</th>
                <th>Description</th>
            </tr>

            {props.repos.map( repo => {
                return <tr> <td>{repo.full_name.slice(14,-1)}</td>
                            <td>{repo.description}</td>
                         </tr>
            })}
            

        </table>
        
        </Body>

        <style jsx>{`
            table, tr, th, td{
                border: 1px solid black;
            }
        `}</style>
    </div>    
)

About.getInitialProps = async function() {
    const id = '8c3defb023ba80bff15b'
    const key = 'b3fa53294b537f9a415c090e77a8ebf098c4c9e6'
    
    let res = await fetch(`https://api.github.com/users/chengboonrong?client_id=${id}&client_secret=${key}`)
    const data = await res.json()

    res = await fetch(`https://api.github.com/users/chengboonrong/repos?client_id=${id}&client_secret=${key}`)
    let repos = await res.json()
    const repos_fullname = repos.map(repo => repo.full_name.slice(14,-1))
    const repos_description = repos.map(repo => repo.description)
    // console.log(repos)

    return { data, repos }
  }

export default About