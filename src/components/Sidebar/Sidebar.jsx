import PropTypes from "prop-types";
import "./Sidebar.css";

//Links are declared outside component to avoid unneccesary redeclarations
const links = [
  {
    src: "dashboard.svg",
    title: "Dashboard",
  },
  {
    src: "note_alt.svg",
    title: "Assessment",
  },
  {
    src: "quiz.svg",
    title: "My Library",
  },
];

const Sidebar = ({ user, show, setShowMenu }) => {
  return (
    <aside className={`sidebar ${show && "open"}`}>
      <div className="header">
        <h5>Menu</h5>
        <img
          src="/assets/menu/cut.svg"
          alt="close"
          onClick={() => setShowMenu(false)}
        />
      </div>
      <div className="sections">
        {links.map((link) => (
          //Temporary check to set Assessment link as active, will be controlled by a state in a real-world app
          <section
            className={`link ${link.title === "Assessment" && "active"}`}
            key={link.title}
          >
            <div className="link-icon">
              <img
                src={`/assets/sidebar/${link.src}`}
                alt={`${link.title}`}
                className="sidebar-icon"
              />
            </div>
            <p>{link.title}</p>
          </section>
        ))}
        {user === "Admin" && (
          <section className="link admin-link">
            <p className="admin-tag">Admin</p>
            <div className="link-icon">
              <img src={`/assets/sidebar/admin_meds.svg`} alt="Round Status" />
            </div>
            <p className="admin-text">Round Status</p>
          </section>
        )}
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  user: PropTypes.string,
  show: PropTypes.bool,
  setShowMenu: PropTypes.func,
};

export default Sidebar;
