import Layout from "./components/Layout";
import AppRouter from "./router/AppRouter";
import Account from "./pages/account/Account";

function App() {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
