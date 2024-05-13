import { useContext } from "react";
import { UnitContext } from "../../App";

// eslint-disable-next-line react/prop-types
export default function ChangeUnit() {
  const {isUnitM, setIsUnitM} = useContext(UnitContext);

	const handleClick = () => {
		setIsUnitM(!isUnitM)
	}
  return (
    <>
      <div className="flex justify-center mt-1">
        <button onClick={handleClick} className=" hover:shadow-md flex justify-center items-center px-2 bg-blue-400 hover:bg-blue-500/80 border-2 rounded-lg">
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <rect
                width="48"
                height="48"
                fill="white"
                fillOpacity="0.01"
              ></rect>{" "}
              <path
                d="M18 31H38V5"
                stroke="#000000"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M30 21H10V43"
                stroke="#000000"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M44 11L38 5L32 11"
                stroke="#000000"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M16 37L10 43L4 37"
                stroke="#000000"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
          {isUnitM ? (
            <small className="text-white font-semibold">converti Grami </small>
          ) : (
            <small className="text-white font-semibold">converti Molari</small>
          )}
        </button>
      </div>
    </>
  );
}
