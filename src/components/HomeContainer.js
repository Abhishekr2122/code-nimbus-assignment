import "./homecontainer.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";

export default function HomeContainer() {
  return (
    <div className="home">
      <IoChevronBackOutline className="action" />
      <div className="textcontainer">
        <div className="text-content">
          <div className="text">Save</div>
          <div className="text">The Date</div>
          <div className="text">
            -19<span style={{ color: "red" }}>.</span>12
            <span style={{ color: "red" }}>.</span>16-
          </div>
        </div>
        <div className="sub-heading">*** WE ARE GETTING MARRIED ***</div>
        <div className="icon-content">
          <div>-</div>
          <div>
            <IoIosHeart className="icon-1" />
            <IoIosHeart className="icon-2" />
          </div>
          <div>-</div>
        </div>
      </div>
      <IoIosArrowForward className="action" />
    </div>
  );
}
