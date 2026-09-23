import Link from 'next/link'
import Img from '@ui/img'
import logoImg from '@img/logo.svg'
import clsx from 'clsx'
import css from './index.module.scss'

const Logo = ({
	//
	className,
	style,
	img,
}) => {
	return (
		<Link
			className={clsx(
				//
				className,
				css.root,
			)}
			style={style}
			href="/"
		>
			<Img
				{...img}
				src={logoImg}
				alt="Логотип"
				priority
			/>
		</Link>
	)
}

export { Logo }
