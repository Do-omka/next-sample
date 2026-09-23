/** @type {import('next').NextConfig} */

import withPlugins from 'next-compose-plugins'

const nextConfig = withPlugins(
	[
		//
	],
	{
		sassOptions: {
			prependData:
				// 'use client' builds its component's styles in the beginning of layout.css that breaks svg namespace for reset
				`@use '@styles/namespaces';` +
				// global scss variables
				`@use '@styles/g-colors';` +
				`@use '@styles/g-grid';`,
		},

		webpack(config) {
			// Grab the existing rule that handles SVG imports
			const oldSvgLoaderRule = config.module.rules.find((rule) => {
				return rule.test?.test?.('.svg')
			})

			const newSvgLoaderRule = {
				...oldSvgLoaderRule,
				test: /\.svg$/i,
				resourceQuery: {
					not: [/react/],
				},
			}

			if (newSvgLoaderRule.loader) {
				newSvgLoaderRule.use = [
					{
						loader: oldSvgLoaderRule.loader,
						options: oldSvgLoaderRule.options,
					},
				]

				delete newSvgLoaderRule.loader
				delete newSvgLoaderRule.options
			}

			newSvgLoaderRule.use.push({
				loader: 'svgo-loader',
			})

			// Modify the svg loader rule to ignore *.svg, since we have it handled now.
			oldSvgLoaderRule.exclude = /\.svg$/i

			config.module.rules.push(
				newSvgLoaderRule,
				// Convert *.svg?react imports inside React components to React components
				{
					test: /\.svg$/i,
					issuer: /\.[jt]sx?$/,
					resourceQuery: {
						and: [/react/], // *.svg?react
					},
					use: [
						{
							loader: '@svgr/webpack',
						},
						{
							loader: 'svgo-loader',
						},
					],
				},
			)

			return config
		},
	},
)

export default nextConfig
