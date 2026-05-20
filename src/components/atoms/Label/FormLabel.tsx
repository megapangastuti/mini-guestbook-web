type Props = {
  htmlFor: string;
  text: string;
  required: boolean;
};

function FormLabel({ htmlFor, text, required = false }: Props) {
  return (
    <>
      <label htmlFor={htmlFor}>
        {text}
        {required && <span className="text-red-700">*</span>}
      </label>
    </>
  );
}

export default FormLabel;
