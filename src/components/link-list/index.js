import { h, render, Component } from "preact";
import { Link } from "preact-router/match";

export default class LinkList extends Component {
  
  render() {

    if(this.props.format == "short") {
      return (
        <nav style="display:inline;">
          <Link activeClassName="active" href="/blog">
            / <span class="underline">Blog</span>
          </Link>
          <Link activeClassName="active" href="/resume">
          / <span class="underline">Resume</span>
          </Link>
        </nav>
      );
    }
    else {
      return (
        <nav>
          <ul>
            <li><strong>Internal Links</strong>
              <ul>
                <li>
                <Link activeClassName="active" href="/blog">
                  Blog
                </Link>
                </li>
                <li>
                <Link activeClassName="active" href="/resume">
                  Resume
                </Link>
                </li>
              </ul>
            </li>
            <li><strong>External / Social Links</strong>
              <ul>
                <li>
                  <a href="http://github.com/develpr">github</a>                
                </li>                
              </ul>
            </li>
          </ul>
        </nav>
      )
    }

    
  }
}
