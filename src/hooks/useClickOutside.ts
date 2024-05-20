import { useEffect, useRef, useState } from 'react';

export default function useClickOutside(initialIsVisible: boolean) {
	const [isOpen, setIsOpen] = useState(initialIsVisible);
	const ref = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});

	return { ref, isOpen, setIsOpen };
}
