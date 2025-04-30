import Card from "./card";

export default function CardList() {
  const cardItems = [
    {
      label: "부트캠프",
      image: "/img/bootcamp_img.webp",
      badge: true,
    },
    {
      label: "내일배움카드",
      image: "/img/card_img.webp",
      badge: false,
    },
    {
      label: "국비지원 받기",
      image: "/img/graphic_test.webp",
      badge: false,
    },
    {
      label: "AI/인공지능",
      image: "/img/graphic_ai.webp",
      badge: false,
    },
    {
      label: "웹/앱개발",
      image: "/img/graphic_app.webp",
      badge: false,
    },
    {
      label: "기획/디자인",
      image: "/img/graphic_design.webp",
      badge: false,
    },
    {
      label: "Orange Label",
      image: "/img/graphic_orangelebel.webp",
      badge: false,
    },
    {
      label: "6주완성",
      image: "/img/graphic_kdc.webp",
      badge: true,
    },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-20">
      {cardItems.map((item, index) => (
        <Card
          key={index}
          label={item.label}
          image={item.image}
          badge={item.badge}
        />
      ))}
    </div>
  );
}
