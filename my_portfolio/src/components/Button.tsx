//@ts-ignore
import ClickSpark from "../sideSupportComponent/ClickSpark.jsx";

/**
 * Button Component of project with responsiveness, using ClickSpark component
 * * Important
 * ! Alert
 * ? Should use
 * TODO: Todo code
 * <> Dev comment
 * @param text : String, text for the button
 * @param onClick : void function, button for the function
 */

type ButtonProps = {
  text: string;
  onClick: () => void;
};
const Button = (prop: ButtonProps) => {
  return (
    <>
      <div
        className="
        border border-[#775288]  py-1 text-white text-sm text-center
        relative cursor-pointer w-16 h-6
        STablet:w-32"
        onClick={prop.onClick}
      >
        {/* //<> Text of the button, as the lower layer of the button div */}
        <h1 className="absolute inset-0 z-0">{prop.text}</h1>
        {/* //<>Use ClickSpark component, as the top layer of the button div */}
        <div className="absolute h-full w-full top-0 left-0">
          <ClickSpark></ClickSpark>
        </div>
      </div>
    </>
  );
};

export default Button;
