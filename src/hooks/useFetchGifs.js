import { useEffect, useState } from "react";
import { GetGif } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});
	// cuando esa categiria cambie yo le estoy pidiendo a reac que vuelva a ejecutar eso
	// es decir todo lo que este en el array efectara a la peticion.
	useEffect(() => {
		GetGif(category).then((imgs) => {
			setState({
				data: imgs,
				loading: false,
			});
		});
	}, [category]);
	return state;
};
