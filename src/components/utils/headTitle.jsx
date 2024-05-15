// eslint-disable-next-line react/prop-types
export default function HeaderTitle({ text }) {
  return (
    <div className="col-span-1 flex justify-center items-center">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{text} </h2>
    </div>
  );
}
