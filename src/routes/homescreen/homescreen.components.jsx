import React from "react";
import "./homescreen.styles.css";

import Navbar from "../../components/navbar/navbar.components";
import Banner from "../../components/banner/banner.components";
import Row from "../../components/row/row.components";
import requests from "../../utils/requests";

const HomeScreen = () => {
	return (
		<div className="homeScreen">
			<Navbar />
			<Banner />
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fethMetflixOriginals}
				isLargeRow
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
};

export default HomeScreen;
