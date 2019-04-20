import Link from 'next/link';

const Header = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link prefetch href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>

    <style jsx>{`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        border: 1px solid #e7e7e7;
        background-color: #f3f3f3;
      }
      
      li {
        float: left;
      }
      
      li a {
        display: block;
        color: #666;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      
      li a:hover:not(.active) {
        background-color: #ddd;
      }
      
      li a.active {
        color: white;
        background-color: #4CAF50;
      }
    `}</style>
  </div>
)

export default Header