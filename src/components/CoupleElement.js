import "./coupleelement.css";
import { IoIosHeart } from "react-icons/io";

export default function CoupleElement() {
  return (
    <div className="main-container">
      <div className="heading">THE HAPPY COUPLE</div>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        ultrices malesuada ante quis pharetra. Nullam non bibendum dolor. Ut vel
        turpis accumsan, efficitur dolor fermentum, tincidunt metus.
      </p>
      <div className="couple-icon-container">
        <span>-</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IoIosHeart className="couple-icon-1" />
          <IoIosHeart className="couple-icon-2" />
        </div>
        <span>-</span>
      </div>
      <div className="couple-content">
        <div className="couple-image">
          <div className="couple-image-content">
            <div>
              <IoIosHeart className="couple-icon-1" />
              <IoIosHeart className="couple-icon-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
