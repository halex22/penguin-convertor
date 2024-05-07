import Input from "./utils/input";
import Select from "./utils/select";

export default function Form({valueUtils, factorUtils }) {
  return (
    <>
      <div className="mx-4 ">

        <div className="flex items-center flex-col">
          <p className="inline me-2">
            Digita qui <i>MW</i> (g/mole, Da o uma)
          </p>

          <div className="block my-2">
            <Input nameId="mw" isMain utils={valueUtils}/>
          </div>

          <p>Es: Insulina = 5734 g/mol</p>
        </div>

        <div className="mt-12 grid grid-cols-3">

          <div className="col-span-1">
            <label htmlFor="valore" className="block mb-1 text-center">
              <span>Valore a convertire </span>
            </label>

						<div className="flex justify-center">
            	<Input nameId="valore" utils={factorUtils}/>
						</div>
          </div>

					<div className="col-span-1">
						<label htmlFor="unitaPartenza" className="block mb-1  text-center">Unità di partenza</label>
						<div className="flex justify-center">
              <Select nameId="unitaPartenza"/>
            </div>
					</div>

					<div className="col-span-1">
					<label htmlFor="unitaArrivo" className="block mb-1 text-center">Unità d'arrivo</label>
            <div className="flex justify-center">
						  <Select  nameId="unitaArrivo"/>
            </div>
					</div>

        </div>
      </div>
    </>
  );
}
