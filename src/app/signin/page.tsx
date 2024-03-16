import Cats from "../assets/svg/Cats";
import SignInBtn from "./_copm/SignInBtn";

export default function page() {
  return (
    <div className="flex h-[100dvh] items-center justify-center">
      <div className="glass flex h-1/2 w-full max-w-[25rem] flex-col items-center justify-center gap-8 rounded-xl">
        <Cats width={80}/>
        <SignInBtn />
      </div>
    </div>
  );
}
