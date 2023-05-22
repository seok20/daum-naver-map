import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/naver-map/page"}>
        <button>NAVER MAP</button>
      </Link>
      <Link href={"/daum-location/page"}>
        <button>DAUM LOCATION</button>
      </Link>
      <Link href={"/react-naver-maps/naverMap"}>
        <button>REACT NAVER MAP</button>
      </Link>
    </div>
  );
}
