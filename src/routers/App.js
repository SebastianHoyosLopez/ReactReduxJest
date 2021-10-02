import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../container/Home';
import Shopping from '../container/shopping';

const App = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/Shopping" component={Shopping} />
			</Switch>
		</Layout>
	</BrowserRouter>
);

export default App;
