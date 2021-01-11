import "./App.css";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./redux/configureStore";
import { Step1, Step2 } from "./forms";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <header className="App-header">Some header</header>
          <section className="App-body">
            <Switch>
              <Route exact path="/" render={() => <Step1 />} />
              <Route exact path="/step2" render={() => <Step2 />} />
            </Switch>
          </section>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
