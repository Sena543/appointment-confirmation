// import logo from "./logo.svg";
import { Container, makeStyles } from "@material-ui/core";
import "./App.css";
// import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

const useStyles = makeStyles({
	root: { justifyContent: "center", alignItems: "center", display: "flex" },
});

function App() {
	const classes = useStyles();
	return (
		<Container className={classes.root}>
			<SearchResults />
		</Container>
	);
}

export default App;
