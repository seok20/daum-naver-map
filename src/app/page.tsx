import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/naver-map"}>
        <button>NAVER MAP</button>
      </Link>
      <Link href={"/daum-location"}>
        <button>DAUM LOCATION</button>
      </Link>
    </div>
  );
}
