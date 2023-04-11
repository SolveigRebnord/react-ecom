import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';

const Layout = () => {
    return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>)
}
 
export default Layout;

//  <Breadcrumbs  />