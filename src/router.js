import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import App from './components/App/'
import Header from './components/Header/'
import SideBar from './components/SideBar/'
import Home from './components/Home/'
import Users from './components/Users/'



export default (
<Router history={browserHistory}>


    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <IndexRoute components={{header: Header, sidebar: SideBar}} />
    </Route>


    <Route path="users" component={Users} >

        <IndexRoute components={{header: Header, sidebar: SideBar}} />
        </Route>

</Router>
);




/*
OK:
 export default (
 <Router history={browserHistory}>
 <Route component={App}>

 <Route path="/" components={{header: Header, sidebar: SideBar}} >

 <Route path="users" component={Users} />

 </Route>

 <Route path="users" component={Users} />
 </Route>
 <Route path="users" component={Users} />
 </Router>
 );


OK with ...
 {this.props.children} in App/index.js

 <Route path="/" component={App}>
 <IndexRoute component={Home}/>
 <IndexRoute components={{header: Header, sidebar: SideBar}} />
 <Route path="users" component={Users}>
 <IndexRoute component={Users}/>
 </Route>
 </Route>



--

 <Route path="users" component={Users} />

 <Route path="users">
 <IndexRoute component={Users} />
 </Route>


 <Route path="users">
 <Route component={SearchLayout}>
 <IndexRoute component={UserList} />
 </Route>
 <Route path=":userId" component={UserProfile} />
 </Route>

--

 <Route path="/" component={Header} />
 <Route path="/" component={SideBar} />


 <Route path="test" components={{header: Header, sidebar: SideBar}} />

 <IndexRoute components={{Header: Header, Sidebar: Sidebar}}/>


 <main>
 {this.props.children}
 </main>

 <Route path="users">
 <IndexRoute component={Users} />
 </Route>


 <Route path="users">
 <Route component={SearchLayout}>
 <IndexRoute component={UserList} />
 </Route>
 <Route path=":userId" component={UserProfile} />
 </Route>

 */