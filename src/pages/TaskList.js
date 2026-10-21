
import { useEffect, useState } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("/data/tasks.json")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Lỗi tải công việc:", error));
  }, []);

  const completed = tasks.filter((task) => task.done).length;
  const pending = tasks.length - completed;
  const totalHours = tasks.reduce((sum, task) => sum + task.hours, 0);

  return (
    <div className="task-page">
      <header className="page-heading">
        <p className="eyebrow">WORKSPACE / TASKS</p>
        <h1>Danh sách công việc</h1>
        <p className="subtitle">
          Theo dõi tiến độ và quản lý công việc của nhóm bạn.
        </p>
        <span className="task-count">{tasks.length} công việc</span>
      </header>

      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon purple">▤</div>
          <p>
            Tổng công việc: <strong>{tasks.length}</strong>
          </p>
          <span>Tất cả nhiệm vụ</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">✓</div>
          <p>
            Đã hoàn thành: <strong>{completed}</strong>
          </p>
          <span>Nhiệm vụ hoàn tất</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">◷</div>
          <p>
            Đang chờ: <strong>{pending}</strong>
          </p>
          <span>Cần tiếp tục xử lý</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon blue">◴</div>
          <p>
            Tổng thời gian: <strong>{totalHours} giờ</strong>
          </p>
          <span>Thời lượng dự kiến</span>
        </div>
      </section>

      <section className="task-section">
        <div className="section-heading">
          <h2>Công việc của nhóm</h2>
          <p>Danh sách nhiệm vụ và trạng thái hiện tại</p>
        </div>

        <div className="task-grid">
          {tasks.map((task) => (
            <article className="task-card" key={task.id}>
              <div className="task-card-top">
                <span
                  className={`priority ${
                    task.priority === "Cao"
                      ? "priority-high"
                      : task.priority === "Trung bình"
                      ? "priority-medium"
                      : "priority-low"
                  }`}
                >
                  {task.priority}
                </span>

                <span className="task-id">
                  TASK-{String(task.id).padStart(3, "0")}
                </span>
              </div>

              <h3>{task.title}</h3>

              <div className="task-meta">
                <div className="assignee">
                  <span className="avatar">
                    {task.assignee.charAt(0)}
                  </span>

                  <div className="meta-info">
                    <span className="meta-label">
                      Người phụ trách: <strong>{task.assignee}</strong>
                    </span>
                  </div>
                </div>

                <div className="hours">
                  <span className="meta-label">
                    Thời lượng: <strong>{task.hours} giờ</strong>
                  </span>
                </div>
              </div>

              <div className="task-footer">
                <span
                  className={`status ${
                    task.done ? "status-done" : "status-pending"
                  }`}
                >
                  <span className="status-dot"></span>
                  {task.done ? "Đã hoàn thành" : "Chưa hoàn thành"}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TaskList;
