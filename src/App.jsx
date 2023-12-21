import Header from "./components/Header";
import Products from "./components/Products";
import Provider from "./context/Provider";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider>
      <Header />
      <main>
        <Products />
        <Cart />
      </main>
    </Provider>
  );
}

export default App;
