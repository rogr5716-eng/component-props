import { bandsData } from "@/Data/bands";
import BandCard from "@/components/BandCard";

export default function BandsPage() {
  return (
    <div className="bandsPage">
      <h1>วงดนตรีที่ชื่นชอบ</h1>
      <div className="bandGrid">
        {bandsData.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </div>
    </div>
  );
}