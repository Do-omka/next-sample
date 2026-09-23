import Link from 'next/link'
import clsx from 'clsx'
import css from './index.module.scss'

const Btn = ({
	//
	children,
	className,
	variant,
	type,
	href,
	...props
}) => {
	const isLink = href != null
	const Element = isLink ? Link : 'button'
	type = type || (isLink ? null : 'button')
	variant = variant || 'primary'

	return (
		<Element
			className={clsx(
				//
				className,
				css.root,
				css['_' + variant],
			)}
			type={type}
			href={href}
			{...props}
		>
			<div className={css.inner}>{children}</div>
		</Element>
	)
}

export default Btn
