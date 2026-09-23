'use client'

import { useState } from 'react'
import clsx from 'clsx'
import css from './index.module.scss'

const Input = (props) => {
	const [value, setValue] = useState(props.value || '')

	props.is = props.is || 'input'

	const inputProps = {
		className: css.input,
		required: props.required,
		...props.input,
		placeholder: null,
		value,
		onChange: (e) => setValue(e.target.value),
	}

	return (
		<label
			className={clsx(
				//
				props.className,
				css.root,
				props.required && css._required,
			)}
		>
			<span className={css.inner}>
				{props.is === 'input' && <input {...inputProps}></input>}
				{props.is === 'textarea' && (
					<textarea
						{...inputProps}
						rows={inputProps.rows || 7}
					></textarea>
				)}

				{!value && (
					<span
						className={clsx(
							//
							css.placeholder,
							props.required && css._required,
						)}
					>
						{props.placeholder}
					</span>
				)}
			</span>
		</label>
	)
}

export default Input
