import Header from "./Header";
import Video from "./Video";
import Profile from "./Profile";

export default function App() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="w-full md:w-3/5 flex flex-col items-center">
        <Header />
        <Video />
        <Profile />
      </div>
    </div>
  );
}
