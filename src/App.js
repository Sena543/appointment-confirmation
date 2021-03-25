import { makeStyles, Container } from "@material-ui/core";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const client = new ApolloClient({
	uri: "http://localhost:9000/",
	cache: new InMemoryCache(),
});

const useStyles = makeStyles({
	root: { justifyContent: "center", alignItems: "center", display: "flex" },
});

function App() {
	const classes = useStyles();
	return (
		<ApolloProvider client={client}>
			{/* <Container className={classes.root}> */}
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Search />
					</Route>
					<Route path="/search-results">
						<SearchResults />
					</Route>
				</Switch>
			</BrowserRouter>
			{/* </Container> */}
		</ApolloProvider>
	);
}

export default App;
