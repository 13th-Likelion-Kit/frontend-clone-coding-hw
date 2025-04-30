import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

const messages = [
  "업무를 잘하고 싶어요",
  "무료로 수강 가능한가요?",
  "개발자로 취업하고 싶어요",
];

export default function AiSearch() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[index];

    const updateText = setTimeout(
      () => {
        if (isDeleting) {
          setText((prev) => prev.slice(0, prev.length - 1));
        } else {
          setText((prev) => currentMessage.slice(0, prev.length + 1));
        }

        if (!isDeleting && text === currentMessage) {
          setTimeout(() => setIsDeleting(true), 1500);
        }

        if (isDeleting && text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % messages.length);
        }
      },
      isDeleting ? 60 : 110
    );

    return () => clearTimeout(updateText);
  }, [text, isDeleting, index]);

  return (
    <div
      className="
    w-full                
    md:w-[500px] 
    lg:w-[800px]         
    xl:w-[800px]        
    mx-auto
    p-4 mt-10 bg-white border-2 border-[#ff7711] rounded-4xl
  "
    >
      <div className="flex items-center justify-between w-full h-7">
        <div className="flex items-center">
          <img src="./img/icon_AI.png" className="w-15 ml-2" />
          <p className="ml-3 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ff8018] to-[#ff9c3f]">
            {text}
          </p>
        </div>

        <ChevronRight className="w-6 h-6 text-[#ff8018]" />
      </div>
    </div>
  );
}
