import React from 'react'
import {Link} from 'react-router'
import axios from 'axios'


var Tabs = [ 
	{	name: 'Last Week News',
		url:'/lastweek' 
	},
	{	name: 'Last Months News',
		url: '/lastmonth' 
	},
	{	name: 'Current',
		url: '/' 
	},
	// {	name: ,
	// 	url:  
	// },
	// {	name: ,
	// 	url:  
	// },
	// {	name: ,
	// 	url:  
	// },
	// {	name: ,
	// 	url:  
	// },
];

//I don't think I am accessing props correctly
class Tab extends React.Component {
//Need to write a function to handle click 
//If you click on the same tab, it stays on current
//which means I have to set a current state
//If it is not on same tag, I need to change urls, and change state of current
//I need to figure out where to do this	

	render(){
		return(
		<li><a href={this.props.url}>{this.props.name}</a></li>
		);
	}
}


//need to add Click event to Tab

class Nav extends React.Component {
	render(){
		return(
			<nav>
				<ul>
					{this.props.Tabs.map((tab)=>
						return(
							<Tab url={tab.url} name={tab.name}/>
							);
						)}
				</ul>
			</nav>
			)
	}
}