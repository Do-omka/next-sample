import clsx from 'clsx'
import css from './index.module.scss'

const Icon = (props) => {
	return (
		<span
			className={clsx(
				//
				props.className,
				css.root,
				'icon',
				'icon-' + props.name,
			)}
		></span>
	)
}

export default Icon
