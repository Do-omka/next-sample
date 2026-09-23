import Image from 'next/image'
import clsx from 'clsx'
import css from './index.module.scss'

const Img = (props) => {
	const nextImageProps = props.image || {}
	nextImageProps.src = props.src
	nextImageProps.alt = props.alt || ''
	nextImageProps.priority = props.priority
	nextImageProps.className = clsx(nextImageProps.className, css.img)
	nextImageProps.quality = nextImageProps.quality || 100
	nextImageProps.sizes = nextImageProps.sizes || '100vw'

	return (
		<div className={clsx(props.className, css.root)}>
			<Image {...nextImageProps} />
		</div>
	)
}

export default Img
