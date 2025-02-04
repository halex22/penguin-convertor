import Input from "./utils/input";
import Select from "./utils/select";
import ChangeUnit from "./utils/changeUnit";


// eslint-disable-next-line react/prop-types
export default function Form({ valueUtils, mwUtils }) {
  return (
    <>
      <div className="mx-4 ">
        <div className="flex items-center flex-col">
          <p className="inline me-2">
            Digita qui <i>MW</i> (g/mole, Da o uma)
          </p>

          <div className="block my-2 ">
            <Input nameId="mw" isMain utils={mwUtils} />
          </div>

          <p>Es: Insulina = 5734 g/mol</p>
        </div>

        <div className="mt-6 grid grid-cols-2">
          <div className="col-span-1">
            <label htmlFor="valore" className="block mb-1 text-center">
              <span>Valore a convertire </span>
            </label>

            <div className="flex justify-center">
              <Input nameId="valore" utils={valueUtils} />
            </div>
          </div>

          <div className="col-span-1">
            <label htmlFor="unitaPartenza" className="block mb-1  text-center">
              Unità di partenza
            </label>
            <div className="flex justify-center">
              <Select nameId="unitaPartenza" />
            </div>
            <ChangeUnit />
          </div>
        </div>
      </div>
    </>
  );
}
