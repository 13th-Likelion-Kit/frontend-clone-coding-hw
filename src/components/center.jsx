import AiSearch from "./ai-search";

export default function Center() {
  return (
    <div className="flex flex-col items-center bg-[linear-gradient(to_top,_white_0%,_#fef5ef_30%,_#fef5ef_100%)] text-center px-4">
      <div className="font-bold text-2xl  md:text-4xl lg:text-5xl md:mt-20 text-[#ff7711] mt-10">
        멋쟁이사자처럼과 함께
      </div>
      <div className="font-bold text-2xl md:text-4xl lg:text-5xl md:mt-2 mt-0">
        맞춤형 성장으로 목표를 이뤄보세요.
      </div>
      <p className="text-[#737373] mt-5 text-base lg:text-xl hidden lg:block">
        관심사에 대해 알려주세요. 저는 연구하고, 정보를 모아 통찰력 있는 답변을
        드릴게요.
      </p>

      <p className="text-[#737373] mt-3 text-base lg:text-xl block lg:hidden">
        관심사에 대해 알려주세요. 저는 연구하고,
      </p>
      <p className="text-[#737373] mt-0 text-base lg:text-xl block lg:hidden">
        정보를 모아 통찰력 있는 답변을 드릴게요.
      </p>

      <AiSearch />
    </div>
  );
}
