import { Button, Card, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles({
	container: {
		display: "flex",
		flexDirection: "column",
		width: "60%",
		justifyContent: "space-evenly",
		alignItems: "center",
		height: "25em",
		marginTop: "8em",
	},
	textField: {
		width: "60%",
		marginBottom: "5em",
		// marginLeft: "10em",
	},
	form: {
		display: "flex",
		width: "100%",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	selectDiv: {
		width: "20em",
		display: "flex",
		marginBottom: "2em",
		flexDirection: "row",
	},
	select: {
		width: "10em",
	},
});
function Search() {
	const styles = useStyles();
	const [IDNumber, setIDNumber] = useState("");
	const [month, setMonth] = useState("Month");
	const [error, setErrorMgs] = useState({
		showMonthError: false,
		showIDError: false,
		idErrorMsgs: "",
	});

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const submitInputID = () => {
		setErrorMgs({ ...error, showIDError: false });
		if (!IDNumber) {
			setErrorMgs({ ...error, showIDError: true, idErrorMsgs: "Identification Number is required" });
			return;
		}

		if (IDNumber.length < 8) {
			setErrorMgs({
				...error,
				showIDError: true,
				idErrorMsgs: "Incorrect ID number. Please check and try again",
			});
		}
		// console.log(IDNumber);
		// console.log(month);
	};

	const submitInputMonth = () => {};

	const renderMonthList = () => {
		return months.map((item, index) => {
			return (
				<option style={{ height: "2em" }} value={index}>
					{item}
				</option>
			);
		});
	};
	return (
		<Card variant="outlined" maxWidth="md" className={styles.container}>
			<form noValidate className={styles.form}>
				<TextField
					error={error.showIDError}
					helperText={error.showIDError ? error.idErrorMsgs : null}
					className={styles.textField}
					value={IDNumber}
					label="Search By Identification Number"
					onChange={(e) => {
						if (error.showIDError) {
							setErrorMgs({ ...error, showIDError: false });
						}
						setIDNumber(e.target.value);
					}}
				/>
				<div className={styles.selectDiv}>
					<Typography>Select Month:</Typography>
					<select
						value={month}
						onChange={(e) => setMonth(e.target.value)}
						className={styles.select}>
						{renderMonthList()}
					</select>
				</div>
				<div className={{ ...styles.selectDiv, height: "4em" }}>
					<Button
						style={{ marginRight: "1em" }}
						onClick={submitInputID}
						disableFocusRipple
						color="primary"
						variant="contained">
						Search By ID
					</Button>
					<Button onClick={submitInputMonth} disableFocusRipple color="primary" variant="contained">
						Search By Month
					</Button>
				</div>
			</form>
		</Card>
	);
}

export default Search;
