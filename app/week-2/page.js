import StudentInfo from "./student-info.js";
import Link from "next/link";
export default function Page() {
    return (
      <main>
        <h1>Shopping List</h1>
        <StudentInfo />
        <ul>
            <li>
                <Link href = "https://github.com/bLanke01">https://github.com/bLanke01</Link>
            </li>
        </ul>
      </main>
    );
  }