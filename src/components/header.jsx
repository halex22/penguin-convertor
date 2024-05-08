import penguinImg from "../assets/penguin.png";
import HeaderTitle from "./utils/headTitle";

export default function Header() {
  return (
    <>
      <h1 className="sr-only">Penguin Convertor</h1>
      <div id="header-container" className="">
        <div className="grid grid-cols-3 mx-8 md:mx-16 lg:mx-32  ">
          <HeaderTitle text={'Penguin'}/>
          <div className="col-span-1 flex justify-center relative h-0 pb-2/3">
            <img src={penguinImg} alt="" className="absolute  w-auto h-full object-fit" />
          </div>
          <HeaderTitle text={'Converter'}/>
        </div>
      </div>
    </>
  );
}
