import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home.js'
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact';



const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/skills' component={Skills} />
				<Route path='/projects' component={Projects} />
				<Route path='/contact' component={Contact} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
