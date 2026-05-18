type Props = {
  title: string;
  value: string;
  color: string;
};

function Card({ title, value, color }: Props) {
  return (
    <div
      className={`bg-linear-to-br bg-[${color}]/10
          backdrop-blur-lg
          border
        border-white/20
          shadow-2xl transform transition-transform flex flex-col justify-center items-center p-4 rounded-sm w-full`}
    >
      <p className={`text-sm text-[white]`}>{title}</p>
      <p className="text-xl text-white font-bold">{value}</p>
    </div>
  );
}

export default Card;
