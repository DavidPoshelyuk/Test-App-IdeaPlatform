import React, {useMemo, useState} from 'react';
import './style.css';
import BuyButton, {TypeCurrency} from "./components/BuyButton";
import Table from "./components/Table";
import tickets from "./tickets.json"
import GroupBtnCurrency from "./components/CurrencyButtonGroup";
import GroupCheckbox from "./components/CheckboxGroup";

const ItemGroupCheckbox: Array<{ [key: string]: string }> = [
	{"all": 'Все'},
	{"0": 'Без пересадок'},
	{"1": '1 Пересадка'},
	{"2": '2 Пересадка'},
	{"3": '3 Пересадка'}
]
const ItemGroupButtonCheckbox: Array<TypeCurrency> = ['usd', 'rub', 'eur']

function App() {
	const data = tickets.tickets
	const [isChecked, setIsChecked] = useState<string>("all")
	const [isCurrency, setIsCurrency] = useState<TypeCurrency>("rub")
	const groupCheckbox = useMemo(() => (
		<GroupCheckbox
			title='количество пересадок'
			item={ItemGroupCheckbox}
			onChange={(value) => {
				setIsChecked(value)
			}}
			value={isChecked}/>), [isChecked]
	)
	const groupButtonCurrency = useMemo(() => (
		<GroupBtnCurrency
			onChange={(value) => {
				setIsCurrency(value)
			}}
			value={isCurrency}
			item={ItemGroupButtonCheckbox}/>), [isCurrency]
	)
	return (
		<div className="content">
			<div className='side-bar'>
				{groupButtonCurrency}
				{groupCheckbox}
			</div>
			<main>
				{data.filter(f => f.stops === +isChecked || isChecked === 'all').map((m, index) => {
					return (
						<div key={index} className='ticket-wrapper'>
							<BuyButton
								data={m.price}
								typeCurrency={isCurrency}
							/>
							<hr/>
							<Table city={m.origin_name}
								   origin={m.origin}
								   date={m.departure_date}
								   time={m.departure_time}
							/>
							<div className='wrapper-arrow-stop'>
								<h1>{m.stops} Пересадок</h1>
								<div className='arrow'/>
							</div>
							<Table city={m.destination_name}
								   origin={m.destination}
								   date={m.arrival_date}
								   time={m.arrival_time}
							/>
						</div>
					)
				})}
			</main>
		</div>

	);
}

export default App;
