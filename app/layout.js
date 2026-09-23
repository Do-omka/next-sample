import '@/app/index.scss'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'

export const metadata = {
	title: 'Next',
	viewport: {
		width: 'device-width',
		initialScale: 1,
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body>
				<Header firstScreen />
				{children}
				<Footer />
			</body>
		</html>
	)
}
