type Props = {
  id: string;
  type: string;
  placeholder: string;
};

function FormInput({ id, type, placeholder }: Props) {
  return (
    <>
      <input id={id} type={type} placeholder={placeholder} className="border py-2.5 pl-3 rounded-sm w-full text-[12px]" />
    </>
  );
}

export default FormInput;
