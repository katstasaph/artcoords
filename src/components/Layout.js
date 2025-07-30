import MainScreen from './MainScreen';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {

  return (
    <>
	  <Header />
      <div className="maincontainer">
        <MainScreen />
	  </div>
	  <Footer />
	</>
  )
}

export default Layout;
