import React from 'react';
import '../style.css'

interface ITable {
	time: string,
	city: string,
	date: string,
	origin:string
}

const Table = ({time, city, date, origin}: ITable) => {
	let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ','ВС'];
	let months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
	let dateSplit = date.split('.')
	let year = '20'+dateSplit[2]
	let completeDate = new Date(+year, +dateSplit[1]-1, +dateSplit[0])
	return (
		<div className='wrapper-table'>
			<label className='time'>{time}</label>
			<label className='city'>{origin} {city}</label>
			<label className='date'>{dateSplit[0]} {months[completeDate.getMonth()]} {year}, {days[completeDate.getDay()-1]}</label>
		</div>
	);
};

export default React.memo(Table);