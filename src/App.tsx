import Footer from 'pages/Footer';
import Header from 'pages/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <h1>test</h1>

      {/* <Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/product/*" element={<Product />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
         */}
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
