import React, { useEffect, useState } from "react";
import "./row.styles.css";
import axios from "../../utils/axios";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
	const [movies, setMovies] = useState([]);
	const base_url = "https://image.tmdb.org/t/p/original/";

	useEffect(() => {
		async function fetchData() {
			const {
				data: { results },
			} = await axios.get(fetchUrl);
			setMovies(results);
		}

		fetchData();
	}, [fetchUrl]);

	return (
		<div className="row">
			<h2>{title}</h2>

			<div className="row__posters">
				{movies.map(
					(movie) =>
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<img
								className={`row__poster ${isLargeRow && "row__posterLarge"}`}
								key={movie.id}
								src={`${base_url}${
									isLargeRow ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie.name}
							/>
						)
				)}
			</div>
		</div>
	);
};

export default Row;
