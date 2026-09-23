import Link from 'next/link'
import Btn from '@ui/btn'
import Img from '@ui/img'
import nav from '@config/nav'
import { NavLink } from '@/features/nav-link'
import { Logo } from '@/features/logo'
import Input from '@ui/input'
// import mainImg from './ui/img.png'
import css from './index.module.scss'
import clsx from 'clsx'

export const Footer = () => {
	const year = new Date().getFullYear()

	const getNavList = (list) =>
		nav[list].map((link, i) => (
			<NavLink
				className={css.navItem}
				href={link.href}
				icon={link.icon}
				key={i}
			>
				{link.text}
			</NavLink>
		))

	return (
		<footer className={css.root}>
			{/*<Img
				src={mainImg}
				className={css.img}
				image={{
					style: {
						objectFit: 'cover',
					},
				}}
			/>*/}
			<div className="container">
				<h2
					className={clsx(
						//
						css.title,
						'subtitle',
					)}
				>
					Форма
				</h2>

				<form className={css.form}>
					<Input
						className={css.formTextArea}
						placeholder="Сообщение"
						is="textarea"
						input={{
							rows: 3,
						}}
					/>
					<div className={css.formFooter}>
						<Input
							className={css.formInput}
							placeholder="email"
							required
						/>
						<Btn
							className={css.formSubmit}
							type="submit"
						>
							Отправить
						</Btn>
					</div>
				</form>

				<nav className={css.nav}>
					<Logo className={clsx(css.navTitle, css.main)} />
					<div className={clsx(css.navList, css.main)}>
						{getNavList('socials')}
					</div>
					<div className={clsx(css.navTitle, css.interesting)}>Интересное</div>
					<div className={clsx(css.navList, css.interesting)}>
						{getNavList('interesting')}
					</div>
					<div className={clsx(css.navTitle, css.menu)}>Меню</div>
					<div className={clsx(css.navList, css.menu)}>
						{getNavList('menu')}
					</div>
				</nav>
			</div>
		</footer>
	)
}
