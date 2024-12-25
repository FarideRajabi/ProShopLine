import Header from "./components/header/index";
import Footer from "./components/footer/index";
import "./globals.css";


const Rootlayout = ({ children }) => {
  return (
    <html leng="en">
      <body className="flex flex-col">
        <Header/>
        <div className="min-h-screen">{children}</div>
        <Footer/>
      </body>
    </html>
  );
};

export default Rootlayout;
