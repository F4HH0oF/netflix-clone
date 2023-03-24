import React, { useEffect, useState } from "react";
import "./banner.styles.css";

import { truncate } from "../../utils/helpers";
import axios from "../../utils/axios";
import requests from "../../utils/requests";

const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const { data } = await axios.get(requests.fethMetflixOriginals);
			setMovie(
				data.results[Math.floor(Math.random() * data.results.length - 1)]
			);
			return data;
		}
		fetchData();
	}, []);

	console.log(movie);

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1280px-Black_flag.svg.png")`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner_contents">
				<h1 className="banner__title">Movie name</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">
					{truncate(
						`Test description of a movie Test description of a movie Test
					description of a movie Test description of a movie Test description of
					a movie Test description of a movie Test description of a movie Test
					description of a movie Test description of a movie Test description of
					a movie Test description of a movie Test description of a movie`,
						150
					)}
				</h1>
			</div>

			<div className="banner--fadeBottom" />
		</header>
	);
};
export default Banner;
