import { technologies } from "../constants";

const SkillsBalls = () => {
  return (
    <>
      <h2
        className="
        text-4xl font-bold text-center text-tertiary

    "
      >
       My Skills   <span className="text-tertiary">.</span>
      </h2>
      <div
        className=" sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto
        flex
        flex-wrap
        justify-center
        items-center
        gap-1
        sm:gap-4
        md:gap-6
        lg:gap-8
         "
        id="skills"
      >
        {technologies.map((technology, index) => (
          <div
            key={index}
            className=" p-4 m-3
        w-28 h-28  rounded-full flex flex-col justify-center items-center
        bg-[#f1f1f1] shadow-lg
        cursor-pointer
        md:w-36 md:h-36 md:p-6 md:m-4 border-solid border-2 border-tertiary
        hover:bg-primary hover:border-[#e5279f] hover:shadow-lg
        transition-all duration-300 ease-in-out
        
           "
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-16 h-16"
            />
            <p
              className="
            text-center text-[#e5279f] text-[14px] font-bold
            px-1
            md:text-[18px]

          "
            >
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
export default SkillsBalls;
