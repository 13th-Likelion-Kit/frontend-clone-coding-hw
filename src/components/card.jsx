export default function Card({ label, image, badge }) {
  return (
    <div className="flex flex-col items-center w-[75px] md:w-[120px] lg:w-[123px]">
      <div className="relative w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[85px] lg:h-[85px]">
        <img
          src={image}
          alt={label}
          className="rounded-[20px] lg:rounded-[25px] w-full h-full object-cover"
        />
        {badge && (
          <span
            className="
      absolute 
      -top-2 right-[-12px]
      bg-[#ff7711] text-white text-xs md:text-xs lg:text-sm font-semibold
      px-[5px] py-[2px]
      md:px-[7px] md:py-[2px]
      lg:px-[10px] lg:py-[2px] rounded-full
      whitespace-nowrap
    "
          >
            국비지원
          </span>
        )}
      </div>

      <p className="text-xs md:text-sm lg:text-m mt-2">{label}</p>
    </div>
  );
}
