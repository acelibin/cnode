import './style.scss';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="left">
          <span>cnodejs</span>
          <input type="text" />
        </div>
        <div className="right">
          <Link to="/">首页</Link>
          <Link to="/">新手入门</Link>
          <Link to="/">API</Link>
          <Link to="/about">关于</Link>
          <Link to="/">注册</Link>
          <Link to="/">登录</Link>
        </div>
      </div>
    </div>
  )
};

export default Header;