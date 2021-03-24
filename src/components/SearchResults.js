import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { TypographyColor } from "./TypographyColor";

const useStyles = makeStyles({
	root: {
		width: "70%",
		display: "flex",
		flexDirection: "column",
		border: "1px solid #F1F3F6",
	},
	div: { display: "flex", flexDirection: "row", margin: "5%", justifyContent: "space-between" },
});

function SearchResults() {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<div className={classes.div}>
				<Typography>Identification Number:</Typography>
				<Typography>12345678</Typography>
			</div>
			<div className={classes.div}>
				<Typography>Name</Typography>
				<Typography>Lionel Messi</Typography>
			</div>
			<div className={classes.div}>
				<Typography>Residence:</Typography>
				<Typography>Akuaffo Hall</Typography>
			</div>
			<div className={classes.div}>
				<Typography>Purpose</Typography>
				<Typography>Medical Checkup</Typography>
			</div>
			<div className={classes.div}>
				<Typography>Doctor:</Typography>
				<Typography>Dr. Michael Frimpong</Typography>
			</div>
			<div className={classes.div}>
				<Typography>Time:</Typography>
				<Typography>9:00-10:00</Typography>
			</div>
			<div className={classes.div}>
				<Typography>Office Number:</Typography>
				<Typography>D12</Typography>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					position: "relative",
					left: 30,
				}}>
				<img src={`${process.env.PUBLIC_URL}/warning.png`} width="30" height="30" alt="warining" />
				{/* <Typography>D12</Typography> */}
				<TypographyColor style={{ marginLeft: 10 }}>
					Ensure to be there 30 minutes before time else appoinment would be cancelled
				</TypographyColor>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-evenly",
					position: "relative",
					left: 30,
					top: 30,
				}}>
				<Button
					style={{ backgroundColor: "#FF0000", color: "#fff" }}
					variant="contained"
					disableElevation>
					Back
				</Button>
				<Button
					style={{ backgroundColor: "#07C759", color: "#fff" }}
					variant="contained"
					disableElevation>
					Confirm
				</Button>
			</div>
		</Container>
	);
}

export default SearchResults;
