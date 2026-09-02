import { Band } from "@/types/band";

export const bandsData: Band[] = [
  {
    id: 1,
    name: "Paradox",
    genre: "Alternative Rock",
    imageUrl: "/images/bands/images.jpg",
    members: [
      { id: 101, name: "กิต", role: "นักร้องนำ" },
      { id: 102, name: "ตูน", role: "มือกีตาร์" },
      { id: 103, name: "เต", role: "มือกลอง" },
      { id: 104, name: "เส็ง", role: "มือคีย์บอร์ด" },
    ],
  },
  {
    id: 2,
    name: "Carabao",
    genre: "(Rock / Hard Rock)",
    imageUrl: "/images/bands/images-1.jpg",
    members: [
      { id: 201, name: "แอ๊ด คาราบาว ", role: "นักร้องนำ" },
      { id: 202, name: "เล็ก คาราบาว", role: "มือกีตาร์" },
      { id: 203, name: "อ๊อด คาราบาว", role: "มือกลอง" },
      { id: 204, name: "ดุก คาราบาว", role: "มือเบส" },
    ],
  },
  {
    id: 3,
    name: "LANDOKMAI",
    genre: "Dream Pop",
    imageUrl: "/images/bands/images-2.jpg",
    members: [
      { id: 301, name: "อูปิม ลานดอกไม้ ศรีป่าซาง", role: "นักร้องนำ" },
      { id: 302, name: "แอนท์ มนัสนันท์ กิ่งเกษม", role: "มือกีตาร์" },
      
    ],
  },
];