import React from 'react';
import '../style.css'

interface IGroupCheckbox {
	title: string
	item: Array<{ [key: string]: string }>
	onChange: (value: string) => void
	value: string
}

const CheckboxGroup = ({title, item, onChange, value}: IGroupCheckbox) => {
	return (
		<fieldset>
			<h2>{title}</h2>
			{item.map((m) => {
				let key = Object.keys(m)[0]
				return (
					<div key={key} className='wrapper-checkbox'>
						<div
							className={`checkbox ${key === value ? 'checkbox-active' : ''}`}
							onClick={() => {
								onChange(key)
							}}
						/>
						<label
							className='name-checkbox'>
							{m[key]}
						</label>
					</div>)
			})}
		</fieldset>
	);
};
export default React.memo(CheckboxGroup);

