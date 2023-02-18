import Navbar from "./Navbar/Navbar";
import classes from "./Layout.module.scss";

interface IProps {
  children: JSX.Element;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Navbar />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default Layout;
