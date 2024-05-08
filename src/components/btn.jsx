export default function Btn({ text, fnct }) {
  return (
    <>
      <button
      type="button"
			onClick={fnct}
			className="border-3 hover:shadow-md px-2 bg-indigo-400/80 border-indigo-400 rounded-lg hover:bg-indigo-400/90"
			>
			<span className="text-white font-semibold text-base sm:text-lg md:text-xl">{text}</span>
			</button>
    </>
  );
}
