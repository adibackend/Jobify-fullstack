const FormRow = ({type,name,defaultValue}) => {
  return (
    <>
      <div className="space-y-2 ">
        <label htmlFor={name}>{name}</label>
        <input
          id={name}
          type={type}
          className=" block w-full rounded-md shadow-sm px-3 py-2 hover:outline hover:outline-[hsl(185,62%,45%)]"
          placeholder={defaultValue || ''}
          required
        />
      </div>
    </>
  );
};
export default FormRow  ;