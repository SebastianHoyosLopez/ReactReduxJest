import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../container/Home';
import Shopping from '../container/Shopping';

const App = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Container fixed>
					<Route exact path="/" component={Home} />
					<Route exact path="/Shopping" component={Shopping} />
				</Container>
			</Switch>
		</Layout>
	</BrowserRouter>
);

export default App;
