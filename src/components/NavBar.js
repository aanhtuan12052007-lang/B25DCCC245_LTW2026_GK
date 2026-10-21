import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Trang chủ</Link>
      {" | "}
      <Link to="/tasks">Danh sách công việc</Link>
    </nav>
  );
};

export default NavBar;