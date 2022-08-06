import React from 'react';
import '../style.css'
import {TypeCurrency} from "./BuyButton";


interface IBtnCurrency {
	onChange: (value: TypeCurrency) => void,
	item: Array<TypeCurrency>
	value: TypeCurrency
}

const CurrencyButtonGroup = ({onChange, value, item}: IBtnCurrency) => {
	return (
		<div className='switch-currency'>
			<div className='btn-group-wrapper'>
				<h2>Валюта</h2>
				<div className='btn-group'>
					{item.map((m, index) => {
						return (
							<button
								key={index}
								type='button'
								onClick={() => {
									onChange(m)
								}}
								className={`btn-currency ${value === m ? 'btn-currency-active' : ''}`}>{m}</button>
						)
					})}
				</div>

			</div>
		</div>

	);
};

export default React.memo(CurrencyButtonGroup);