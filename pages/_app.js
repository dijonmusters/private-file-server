import "tailwindcss/tailwind.css";
import Nav from "../components/nav";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 flex items-center justify-center">
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default MyApp;
