import { useState } from "react";

const CheckBox = () => {
  const [checkValue, setCheckValue] = useState({
    checkBox1: false,
    checkBox2: false,
    checkBox3: false,
    checkBox4: false,
    checkBox5: false,
    checkBox6: false,
    checkBox7: false,
    checkBox8: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    console.log(name);
    console.log(checked);
    setCheckValue((val) => ({
      ...val,
      [name]: checked,
    }));
  };
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <h1 className="text-4xl">Historical Chart</h1>
        <h1 className="text-4xl">Yield Curve</h1>
      </div>
      <div className="my-2" style={{ display: "flex", gap: "10px" }}>
        <label className="mx-2">
          <input className="mx-1" type="checkbox" name="checkBox1" checked={checkValue.checkBox1} onChange={handleChange}/>
          1h
        </label>
        <label className="mx-2">
          <input
            className="mx-1"
            type="checkbox"
            name="checkBox2"
            checked={checkValue.checkBox2}
            onChange={handleChange}
          />
          4h
        </label>
        <label className="mx-2">
          <input
            className="mx-1"
            type="checkbox"
            name="checkBox3"
            checked={checkValue.checkBox3}
            onChange={handleChange}
          />
          1d
        </label>
        <label className="mx-2">
          <input
            className="mx-1"
            type="checkbox"
            name="checkBox4"
            checked={checkValue.checkBox4}
            onChange={handleChange}
          />
          3d
        </label>
        <label className="mx-2">
          <input
            className="mx-1"
            type="checkbox"
            name="checkBox5"
            checked={checkValue.checkBox5}
            onChange={handleChange}
          />
          1w
        </label>
        <label className="mx-2">
          <input
            className="mx-1"
            type="checkbox"
            name="checkBox6"
            checked={checkValue.checkBox6}
            onChange={handleChange}
          />
          1mo
        </label>
        <label className="mx-2">
          <input
            className="mx-1"
            type="checkbox"
            name="checkBox7"
            checked={checkValue.checkBox7}
            onChange={handleChange}
          />
          3mo
        </label>
        <label className="mx-2">
          <input
            className="mx-1"
            type="checkbox"
            name="checkBox8"
            checked={checkValue.checkBox8}
            onChange={handleChange}
          />
          6mo
        </label>
      </div>
    </>
  );
};

export default CheckBox;
