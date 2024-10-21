import { useEffect, useState } from 'react'

/**
 * @param {string} text
 * @param {number} speed
 * @returns
 */
export function useTypewriter(text, speed = 50) {
	const [displayText, setDisplayText] = useState('')
	const [isWriting, setIsWriting] = useState(true)

	useEffect(() => {
		setDisplayText(text.slice(0, 3))
		setIsWriting(true)

		const timeoutID = setTimeout(function typeWriter(i = 2) {
			if (i < text.length) {
				setDisplayText((prev) => prev + text.charAt(i))

				i++
				setTimeout(() => typeWriter(i++), speed)
			} else {
				setIsWriting(false)
				setDisplayText(text)
				clearTimeout(timeoutID)
			}
		}, speed)

		return () => clearTimeout(timeoutID)
	}, [text, speed])

	return { displayText, isWriting, setIsWriting }
}
