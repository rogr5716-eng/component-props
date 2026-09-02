import { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="bandCard">
      <img src={band.imageUrl} alt={band.name} className="bandImage" />
      <h2>{band.name}</h2>
      <p className="bandGenre">แนวเพลง: {band.genre}</p>

      <div className="bandMembers">
        <strong>สมาชิกในวง:</strong>
        <ul>
          {band.members.map((member) => (
            <li key={member.id}>
              {member.name} - {member.role}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
