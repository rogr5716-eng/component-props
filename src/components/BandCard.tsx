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
            <li key={member.id} className="memberItem">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="memberThumb"
              />
              <a
                href={member.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="memberLink"
              >
                {member.name}
              </a>{" "}
              - {member.role}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
 





























