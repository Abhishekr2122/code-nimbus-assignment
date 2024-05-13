import { TbLetterG } from "react-icons/tb";
import { IoIosHeart } from "react-icons/io";
import { TbLetterD } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

export default function ResponsiveNav() {
  return (
    <div className="responsive-nav">
      <div className="iconcontainer">
        <TbLetterG />
        <IoIosHeart />
        <TbLetterD />
      </div>
      <div>
        <GiHamburgerMenu className="options" />
      </div>
    </div>
  );
}
