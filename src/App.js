import { connect } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";

const mapStateToProps = (state) => {
    return {
      results: state
    }
}

function App() {
  return (
    <div className="app-container app">
      <Header />
      <Body />
    </div>
  );
}

export default connect(mapStateToProps)(App);
