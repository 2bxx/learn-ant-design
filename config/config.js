export default{
	singular : true,
	plugins :[
		['umi-plugin-react',{
			antd: true,
			dva : true
		}],
	],
	routes : [
		{
		 	path: '/',
		    component: '../layout',
		    routes: [
		       	{
			        path: '/',
			        component: 'hellloWord',
		      	},
		      	{
			        path: '/helloworld',
			        component: 'hellloWord'
		      	},
		      	{
			        path: '/dashboard',
			        routes: [
			          { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
			          { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
			          { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
			        ]
		      	},
		      	{
		      		path:'pulzzlecards',
		      		component:'pulzzleCards'
		      	},
	      		{
	      			path:'list',
	      			component:'list/index'
	      		}
		    ]
		}
	]
};