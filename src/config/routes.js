import React from 'react'
import Imagenes from "../Imagenes";
import Principal from "../principal/principal"

const routes = [

	
	
	{
		path: '/',
		component: Principal ,
		exact: true,
		
	},
    {
				path: '/teamo',
				component: Imagenes,
				exact: true,
			},
];

export default routes;
