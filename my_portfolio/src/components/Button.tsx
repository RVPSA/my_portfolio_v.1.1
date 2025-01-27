//@ts-ignore
import ClickSpark from "../sideSupportFiles/Animations/ClickSpark/ClickSpark.jsx";
const Button = () => {
  return (
    // <div className="border border-[#775288] px-2 py-1 text-white text-sm">Live</div>
    <>
      <div
        className="
        border border-[#775288] px-2 py-1 text-white text-sm text-center
        "
        onClick={() => {
          console.log("ABC");
        }}
      >
        <button>Live</button>
      </div>
    </>
  );
};

export default Button;
