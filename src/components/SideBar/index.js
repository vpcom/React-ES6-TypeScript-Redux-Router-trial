import React from 'react';
import { Link } from 'react-router';



export default class SideBar extends React.Component {
    render() {
        return <aside>
            <ul>
                <li><Link to="/" activeClassName="active">Home</Link></li>
                <li><Link to="/users" activeClassName="active">Users</Link></li>
                <li><Link to="/counter" activeClassName="active">Counter</Link></li>
                <li><Link to="/visit" activeClassName="active">Visit counter</Link></li>
            </ul>
        </aside>;
    }
}
