import { Menu } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-white p-4 border-b border-[#e5e5e5] mt-[-3px]">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center gap-8">
          <img src="./img/likelion_kor_logo.svg" alt="Logo" />
          <nav className="hidden lg:block">
            <ul className="flex gap-6 font-semibold">
              <li>전체강의</li>
              <li>부트캠프</li>
              <li className="bg-[#f5f5f5] text-[#737373] rounded-sm px-2 py-1 text-xs font-medium ml-[-17px]">
                국비지원
              </li>
              <li>이벤트</li>
              <li>기업문의</li>
            </ul>
          </nav>
        </div>

        <div>
          <button className="border border-[#d4d4d4] rounded-3xl px-4 py-2 font-semibold text-sm">
            <span className="hidden lg:inline">로그인/회원가입</span>
            <span className="lg:hidden inline">로그인</span>
          </button>
          <Menu size={24} className="text-gray-800 lg:hidden inline ml-2" />
        </div>
      </div>
    </div>
  );
}
