//@ts-ignore
import ClickSpark from "./ClickSpark.jsx";

const Button = () => {

  return (
    <>
      <div
        className="
        border border-[#775288]  py-1 text-white text-sm text-center
        relative cursor-pointer w-16 h-6
        STablet:w-32"
        onClick={() => {
          console.log("ABC");
        }}
      >
        <h1 className="absolute inset-0 z-0">Live</h1>
        <div className="absolute h-full w-full top-0 left-0"><ClickSpark></ClickSpark></div>
      </div>
    </>
  );
};

export default Button;
