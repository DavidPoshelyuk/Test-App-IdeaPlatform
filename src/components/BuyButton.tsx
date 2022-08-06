import React from 'react';
import '../style.css'

export type TypeCurrency = 'usd' | 'rub' | 'eur'

interface IBtnBuy {
	data: number
	typeCurrency: TypeCurrency
}

const BuyButton = ({data, typeCurrency}: IBtnBuy) => {
	return (
		<button className='wrapper-btn-buy'>
			<label className='btn-buy-name'>
				Купить <br/> за {data.toLocaleString('ru', {
				style: 'currency',
				currency: typeCurrency,
				minimumFractionDigits: 0
			})}
			</label>
		</button>
	);
};

export default React.memo(BuyButton);