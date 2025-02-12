import Head from "next/head";
import SaveTheDates from "./components/savethedate";
import MainContent from "./components/main";
import Footer from "./components/footer";
import RoomCheck from "./components/roomcheck";
import { Map } from "./components/map";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Wedding Invitation</title>
        <meta
          name="description"
          content="Join us for our wedding celebration!"
        />
      </Head>
      <div className="min-h-screen">
        <SaveTheDates />
      </div>
      <MainContent />
      <Map />
      <RoomCheck />
      <Footer />
    </div>
  );
}
