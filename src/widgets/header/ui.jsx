'use client'

import { useState, useEffect } from 'react'
import { Logo } from '@/features/logo'
import Icon from '@ui/icon'
import { menu } from '@config/nav'
import { NavLink } from '@/features/nav-link'
import { Cart } from './ui/cart'
import MobileMenu from './ui/mobile-menu'
import clsx from 'clsx'
import css from './index.module.scss'

export function Header({
	//
	firstScreen,
}) {
	const [isOpen, setOpen] = useState(false)

	function toggleMobileMenu() {
		setOpen(!isOpen)
	}

	const [isStuck, setStuck] = useState(false)

	useEffect(() => {
		function handler() {
			setStuck(!!window.scrollY)
		}

		window.addEventListener('scroll', handler)

		return () => {
			window.removeEventListener('scroll', handler)
		}
	})

	return (
		<header className={clsx(css.root, isStuck && css._stuck)}>
			<MobileMenu
				open={isOpen}
				desktopPreview={firstScreen && !isStuck}
				onToggle={toggleMobileMenu}
			/>
			<div
				className={clsx(
					//
					css.content,
					'container',
				)}
			>
				<button
					className={clsx(
						//
						css.menuBtn,
						isOpen && css._active,
					)}
					onClick={toggleMobileMenu}
				>
					<Icon name="menu" />
				</button>

				<Logo className={css.logo} />

				<nav
					className={clsx(
						//
						css.nav,
						firstScreen && !isStuck && css._hidden,
					)}
				>
					{menu.map((link, i) => (
						<div
							className={css.navItem}
							key={i}
						>
							<NavLink
								className={css.navLink}
								href={link.href}
							>
								{link.text}
							</NavLink>

							{link.items && (
								<div className={css.navSubList}>
									{link.items.map((link, i) => (
										<NavLink
											className={css.navSubLink}
											href={link.href}
											key={i}
										>
											{link.text}
										</NavLink>
									))}
								</div>
							)}
						</div>
					))}
				</nav>

				<Cart className={css.cartBtn} />
			</div>
		</header>
	)
}
