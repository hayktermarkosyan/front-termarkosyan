import Header from "../components/Header";
import Menu from "../components/Menu";

interface LayoutProps {
  children: JSX.Element;
  setFilteredPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
}

const Layout = ({ children, setFilteredPosts }: LayoutProps) => {
  return (
    <>
      <Header setFilteredPosts={setFilteredPosts} />
      <Menu />
      {children}
    </>
  );
};

export default Layout;
