import React, { useEffect, useState } from "react";
import "./banner.styles.css";

import { truncate } from "../../utils/helpers";
import axios from "../../utils/axios";
import requests from "../../utils/requests";

const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const {
				data: { results },
			} = await axios.get(requests.fethMetflixOriginals);
			setMovie(results[Math.floor(Math.random() * results.length - 1)]);
			return results;
		}
		fetchData();
	}, []);

	console.log(movie);

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner_contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">
					{truncate(movie?.overview, 150)}
				</h1>
			</div>

			<div className="banner--fadeBottom" />
		</header>
	);
};
export default Banner;
