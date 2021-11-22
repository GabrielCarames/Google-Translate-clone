import Header from "./components/Header";
import Body from "./components/Body";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
      results: state
    }
}

function App() {
  return (
    <div className="app-container app">
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default connect(mapStateToProps)(App);
