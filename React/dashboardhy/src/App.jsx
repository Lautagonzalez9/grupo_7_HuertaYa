import "./assets/css/app.css";
import SideBar from "./components/SideBar/SideBar";
import ContentWrapper from "./views/ContentWrapper/ContentWrapper";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from "./components/TopBar/TopBar";
import NotFound from "./views/404/NotFound";
import LastProduct from "./components/ContentRowTop/subcomponents/LastProduct/LastProduct";
import GenresInDB from "./components/ContentRowTop/subcomponents/GenresInDB/GenresInDB";
import MovieList from "./views/ProductsList/ProductsList";

import './App.css';

function App() {
	return (
	  <div id="wrapper">
		<Router>
		  {/* <!-- Sidebar --> */} 
		  <SideBar />
		  {/* <!-- End of Sidebar --> */}
		  <div id="content-wrapper" className="d-flex flex-column">
			<TopBar />
			{/* <!-- Content Wrapper --> */}
			<Routes>
			  <Route path="/" element={<ContentWrapper />}/>
			  <Route path="/categories" element={<GenresInDB />}/>
			  <Route path="/last-product" element={<LastProduct />}/>
			  <Route path="/list" element={<MovieList />}/>
			  <Route path="/users"element={<UsersList />}/>
			  <Route path="*" element={<NotFound />}/>
			</Routes>  
			{/* <!-- End of Content Wrapper --> */}
			<Footer />
		  </div>
		</Router>
	  </div>
	);
  }

export default App;