import { useState, useRef, useEffect } from 'react';

const useOutsideClick = () => {
	console.log("in");
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef();
	const handleOutsideClick = () => {
		if (ref.current) {
			setIsVisible(false);
		}
	};
	console.log("ref456", ref.current);
	useEffect(() => {
		document.addEventListener('click', handleOutsideClick);
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	return [ref, isVisible, setIsVisible];
};

export default useOutsideClick;