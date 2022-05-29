import Head from "next/head";
import Table from "../src/table";
import { Typography } from "@material-ui/core";
export default function Home() {
	const data = require("../data/data.json");
	return (
		<>
			<Head>
				<title className="mainHeading">GoogleCloudReady Facilitator Program Leaderboard</title>
				<meta name="viewport" content="width=device-width, initial-scale=0.1" />
			</Head>
			<div>
				<footer className="flex apart subhead">
					<Typography className="subhead" variant="body2" color="textSecondary">
						Last updated: {data.buildDate}
					</Typography>
				</footer>
				<div className="center">
					<Typography className="bolder" variant="h3" color="textPrimary">
						GoogleCloudReady Facilitator Program Progress Report
					</Typography>
					<Typography className="bolder" variant="h4" color="textSecondary">
						Asansol Engineering College
					</Typography>
				</div>
				<Table data={data.resultsWithRank}></Table>
			</div>
			<div className="center">
				<Typography variant="body2" color="textSecondary">
					<a
						href="https://www.linkedin.com/in/sauravmukherjee44/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Made with ❤️ by Saurav
					</a>
				</Typography>
			</div>
		</>
	);
}
