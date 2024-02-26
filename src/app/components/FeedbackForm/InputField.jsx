import React from "react";

const InputField = ({
  label,
  id,
  name,
  type,
  value,
  error,
  onChange,
  onBlur,
  required,
  placeholder,
}) => {
  const InputElement = type === "textarea" ? "textarea" : "input";

  return (
    <div className={`w-full relative mb-6`}>
      <label className="xl:text-lg xs:text-sm" htmlFor={id}>
        {label}
        {required && <span className="text-[red]"> *</span>}
      </label>
      <InputElement
        className={`w-full h-10 rounded-[0.3rem] mt-2 px-3 outline-none focus:ring-1 focus:ring-transparent border placeholder:text-xs placeholder:text-fontGray
        xl:text-base xl:placeholder:text-base
          ${
            type === "textarea"
              ? "xl:h-[135px] p-1 xs:h-[99px] resize-none"
              : "h-[45px]"
          }
          ${
            error
              ? "border-[red] "
              : value
              ? "border-deepBlue"
              : "border-fontGray focus:border-vividBlue"
          }
        `}
        type={type !== "textarea" ? type : undefined}
        autoComplete="off"
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        rows={type === "textarea" ? "4" : undefined}
        required
      />
      {error && (
        <div
          className={`absolute top-[100%] text-[red] transition duration-300  ${
            error ? "" : "opacity-0 translate-y-[-0.625rem]"
          } `}
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default InputField;
