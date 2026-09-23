import Link from 'next/link'
import Icon from '@ui/icon'
import clsx from 'clsx'
import css from './index.module.scss'

function NavLink({
	//
	children,
	className,
	icon,
	href,
}) {
	return (
		<Link
			className={clsx(
				//
				className,
				css.root,
			)}
			href={href}
		>
			<span className={css.content}>
				{icon && (
					<Icon
						name={icon}
						className={css.icon}
					/>
				)}
				{children}
			</span>
		</Link>
	)
}

export default NavLink
