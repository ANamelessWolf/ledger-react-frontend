import './SpinningLoader.scss';
import React from 'react';

export default function SpinningLoader({ message }) {
	return (
		<div className='spinning-loader-container'>
			<div className='spinning-loader' />
			<p>{message}</p>
		</div>
	);
}
