
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Quản lý công việc nhóm</h1>
      <p>
        Chào mừng bạn đến với ứng dụng quản lý công việc nhóm.
      </p>
      <p>
        Theo dõi tiến độ, người phụ trách và thời lượng thực hiện
        các công việc của nhóm một cách dễ dàng.
      </p>
      <Link to="/tasks">Xem danh sách công việc</Link>
    </div>
  );
};

export default Home;
