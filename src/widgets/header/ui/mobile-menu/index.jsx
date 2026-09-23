import { NavLink } from '@/features/nav-link'
import { menu } from '@config/nav'
import Icon from '@ui/icon'
import clsx from 'clsx'
import css from './index.module.scss'

export default function MobileMenu({
	//
	open,
	desktopPreview,
	className,
	onToggle,
}) {
	function toggleMobileMenu() {
		onToggle(!open)
	}

	return (
		<aside
			className={clsx(
				//
				className,
				css.root,
				open && css._open,
				desktopPreview && css._desktopPreview,
			)}
		>
			<nav className={css.nav}>
				{menu.map((link, i) => (
					<div
						className={css.navItem}
						key={i}
					>
						<NavLink href={link.href}>{link.text}</NavLink>
					</div>
				))}
			</nav>

			<button
				className={css.btn}
				onClick={toggleMobileMenu}
			>
				<span className={css.btnContent}>
					меню{' '}
					<Icon
						className={clsx(
							//
							css.btnIcon,
							open && css._open,
						)}
						name="chevron-left"
					/>
				</span>
			</button>
		</aside>
	)
}
