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
  formType,
}) => {
  const InputElement = type === "textarea" ? "textarea" : "input";
  const isFeedbackForm = formType === "feedback";

  return (
    <div className={`w-full relative mb-6`}>
      <label className="xl:text-lg xs:text-sm" htmlFor={id}>
        {label}
        {required && <span className="text-[red]"> *</span>}
      </label>
      <InputElement
        className={`w-full h-10 mt-1 px-3 rounded-[0.3rem]  bg-inherit outline-none focus:ring-1 focus:ring-transparent border placeholder:text-xs placeholder:text-fontGray
        md:mt-[6px]
        xl:text-base xl:placeholder:text-base
            ${type === "textarea"
            ? isFeedbackForm
              ? "h-[99px] pt-2 resize-none"
              : "pt-2 xs:h-16 md:h-24  resize-none"
            : "h-11"
          }
          ${error
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
        <span
          className={`w-full absolute right-0 top-[102%] xl:top-[100%] text-sm xl:text-lg text-[red] leading-none transition duration-300  ${error ? "" : "opacity-0 "
            } `}
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default InputField;