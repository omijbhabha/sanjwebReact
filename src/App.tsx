import Header from "./Header";
import Video from "./Pages/Home/Video";
import Profile from "./Pages/Home/Profile";
// import EduTimeline from "./Pages/Home/EduTimeline";

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Video />
      <Profile />
      {/* <EduTimeline /> */}
    </div>
  );
}
