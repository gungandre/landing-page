import Header from "./components/header/header.component";
import Jumbotron from "./components/jumbotron/jumbotron.component";
import Content from "./components/content/content.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Header />
      <Jumbotron />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
