import Link from 'next/link'
import Icon from '@ui/icon'
import clsx from 'clsx'
import css from './index.module.scss'

export const Cart = ({
	//
	className,
}) => {
	const number = 5

	return (
		<Link
			className={clsx(
				//
				className,
				css.root,
			)}
			href="/cart"
		>
			<Icon
				className={css.icon}
				name="cart"
			/>
			<span className={css.badge}>{number}</span>
		</Link>
	)
}
