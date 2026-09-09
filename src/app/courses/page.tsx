"use client"; 
import CoursesCard from "@/components/CorusesCard";
import { course } from "@/Data/coursesdata";

export default function CoursesPage() {
  return (  
    <>
    <button type="button" onClick={() => console.log("clicked")}> 
      ปุ่มทดลอง 
    </button>     

    <CourseExplorer courses={courses} />
    <div className="courseGrid">
      {course.map((c) => (
        <CoursesCard key={c.id} course={c} />
      ))}
    </div>
  </>  
  );
}
