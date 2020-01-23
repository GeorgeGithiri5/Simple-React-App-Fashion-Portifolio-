import React from 'react';
import Image from '../assets/IMG_8975.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';
import '../App.css';


class NavBar extends React.Component{
	render(){
		return(
		<div className = 'nav'>
			<nav>
				<Router>
					<ul>
						<li><Link to = '/'>Home</Link></li>
						<li><Link to = '/Services'>Services</Link></li>
						<li><Link to = '/Contact'>Contact</Link></li>
						<li><Link to = '/About Us'>About Us</Link></li>
						<li><Link to = '/Consultation'>Consultation</Link></li>
						<li><Link to = '/Testimonials'>Testimonials</Link></li>
					</ul>

					<Switch>
						<Route exact path = '/' component={Home}/>
						<Route exact path = '/Services' component={Services}/>
						<Route exact path = '/' component={Home}/>
						<Route exact path = '/' component={Home}/>
						<Route exact path = '/' component={Home}/>
					</Switch>
				</Router>	
			</nav>
		</div>
		)
	}
}

export default NavBar