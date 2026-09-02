import CoursesCard from "@/components/CorusesCard";
import { course } from "@/Data/coursesdata";

export default function CoursesPage() {
  return (
    <div className="courseGrid">
      {course.map((c) => (
        <CoursesCard key={c.id} course={c} />
      ))}
    </div>
  );
}
