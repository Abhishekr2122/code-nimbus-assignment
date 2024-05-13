import HeartIcon from "../ui/HeartIcon";
import "./navbar.css";
import { TbLetterG } from "react-icons/tb";
import { IoIosHeart } from "react-icons/io";
import { TbLetterD } from "react-icons/tb";
import ResponsiveNav from "./ResponsiveNav";
export default function NavBar() {
  return (
    <div className="nav">
      <div className="content-container">
        <div className="content">
          <div className="text-container">HOME</div>
          <div className="icon-container">
            <HeartIcon />
          </div>
        </div>
        <div className="content">
          <div className="text-container">ABOUT</div>
          <div className="icon-container">
            <HeartIcon />
          </div>
        </div>
        <div className="content">
          <div className="text-container">GALLERY</div>
          <div className="icon-container">
            <HeartIcon />
          </div>
        </div>
        <div className="content">
          <div className="text-container">THE STORY</div>
        </div>

        <div className="content">
          <div className="logo-container">
            <TbLetterG />
            <IoIosHeart />
            <TbLetterD />
          </div>
        </div>

        <div className="content">
          <div className="text-container">THE WEDDING</div>
          <div className="icon-container">
            <HeartIcon />
          </div>
        </div>
        <div className="content">
          <div className="text-container">BLOG</div>
          <div className="icon-container">
            <HeartIcon />
          </div>
        </div>
        <div className="content">
          <div className="text-container">PAGE</div>
          <div className="icon-container">
            <HeartIcon />
          </div>
        </div>
        <div className="content">
          <div className="text-container">RSVP</div>
        </div>
      </div>
      <ResponsiveNav />
    </div>
  );
}
