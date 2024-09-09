import React from 'react';

export function Box({ children }) {
	return (
		<div
			style={{
				color: '#fff',
				padding: '0.5rem',
				width: 'fit-content',
			}}
			class="details_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module isBrowser_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module alert alert--info details_node_modules-@docusaurus-theme-classic-lib-theme-Details-styles-module"
		>
			{children}
		</div>
	);
}

export function Highlight({ children, color, className }) {
	return (
		<span
			style={{
				backgroundColor: color,
				borderRadius: '2px',
				color: '#fff',
				padding: '0.2rem',
			}}
			className={className}
		>
			{children}
		</span>
	);
}
