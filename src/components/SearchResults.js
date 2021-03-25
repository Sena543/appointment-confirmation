import { Button, Card, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { gql, useMutation } from "@apollo/client";
import { TypographyColor } from "./TypographyColor";
import { withRouter } from "react-router";

const CONFIRM_ARRIVAL = gql`
	mutation($studentID: String!) {
		confirmArrival(studentID: "12345678")
	}
`;

const useStyles = makeStyles({
	root: {
		width: "70%",
		position: "relative",
		top: "2em",
		display: "flex",
		flexDirection: "column",
		height: "50em",
		border: "1px solid #F1F3F6",
	},
	div: { display: "flex", flexDirection: "row", margin: "4%", justifyContent: "space-between" },
});

function SearchResults(props) {
	const classes = useStyles();
	const personData = props.history.location.state;
	const appointment = personData.appointmentList;
	console.log(appointment);
	const [confirmArrival, { data }] = useMutation(CONFIRM_ARRIVAL);

	return (
		<Card className={classes.root} variant="outlined">
			<div className={classes.div}>
				<Typography>Identification Number:</Typography>
				<Typography>{personData?.studentID}</Typography>
			</div>
			<div className={classes.div}>
				<Typography>Name</Typography>
				<Typography>{personData?.studentName}</Typography>
			</div>
			<div className={classes.div}>
				<Typography>Residence:</Typography>
				<Typography>{personData?.hallOfResidence}</Typography>
			</div>
			<div className={classes.div}>
				<Typography>Purpose</Typography>
				<Typography>{personData?.studentID}</Typography>
			</div>
			<div className={classes.div}>
				<Typography>Doctor:</Typography>
				<Typography>{personData?.studentID}</Typography>
			</div>
			<div className={classes.div}>
				<Typography>Time:</Typography>
				<Typography>{personData?.studentID}</Typography>
			</div>
			<div className={classes.div}>
				<Typography>Office Number:</Typography>
				<Typography>{personData?.studentID}</Typography>
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
		</Card>
	);
}

export default withRouter(SearchResults);
