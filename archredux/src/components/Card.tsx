interface CardProps {
  custom?: string;
  rounded?: boolean;
  img?: string;
}

const Card = ({ custom = "", rounded = false, img = "" }: CardProps) => {
  return (
    <div
      className={`${
        custom === ""
          ? "h-[250px] w-[250px] border border-black bg-white flex items-center justify-center"
          : custom
      } ${rounded ? "rounded-[16px]" : ""}`}
    >
      <img
        className="w-full h-full object-cover"
        src={img || "https://via.placeholder.com/250"}
        alt=""
      />
    </div>
  );
};

export default Card;
