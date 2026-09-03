import { Band } from "@/types/band";

export const bandsData: Band[] = [
  {
    id: 1,
    name: "Paradox",
    genre: "Alternative Rock",
    imageUrl: "/images/bands/paradoxlogo.jpg",
    members: [
      { id: 101, name: "กิต", role: "นักร้องนำ", imageUrl: "/images/bands/เสรฐพร กฤดากร ณ อยุธยา.jpg" },
      { id: 102, name: "ตูน", role: "มือกีตาร์", imageUrl: "/images/bands/อิทธิพงศ์ กฤดากร ณ อยุธยา.jpg" },
      { id: 103, name: "เต", role: "มือกลอง", imageUrl: "/images/bands/จักรพงศ์ สิริริน.jpg" },
      { id: 104, name: "เส็ง", role: "มือคีย์บอร์ด", imageUrl: "/images/bands/ขจัดภัย กาญจนาภา.jpg" },
    ],
  },
  {
    id: 2,
    name: "Carabao",
    genre: "(Rock / Hard Rock)",
    imageUrl: "/images/bands/images-1.jpg",
    members: [
      { id: 201, name: "แอ๊ด คาราบาว", role: "นักร้องนำ", imageUrl: "/images/bands/ยืนยง โอภากุล.jpg" },
      { id: 202, name: "เล็ก คาราบาว", role: "มือกีตาร์", imageUrl: "/images/bands/ปรีชา ชนะภัย.jpg" },
      { id: 203, name: "อ๊อด คาราบาว", role: "มือกลอง", imageUrl: "/images/bands/อ๊อด คาราบาว.jpg" },
      { id: 204, name: "ดุก คาราบาว", role: "มือเบส", imageUrl: "/images/bands/ดุก คาราบาว.jpg" },
    ],
  },
  {
    id: 3,
    name: "LANDOKMAI",
    genre: "Dream Pop",
    imageUrl: "/images/bands/images-2.jpg",
    members: [
      { id: 301, name: "อูปิม ลานดอกไม้ ศรีป่าซาง", role: "นักร้องนำ", imageUrl: "/images/bands/อูปิมลานดอกไม้ ศรีป่าซาง.jpg" },
      { id: 302, name: "แอนท์ มนัสนันท์ กิ่งเกษม", role: "มือกีตาร์", imageUrl: "/images/bands/มนัสนันท์ กิ่งเกษม.jpg" },
    ],
  },
];