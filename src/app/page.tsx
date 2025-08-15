import { Button } from "@/components/ui/button";
import { AuthScreen } from "@/features/auth/components/auth-screen";

export default function Home() {
    return(
      <>
      <AuthScreen/>
      <Button variant="slack">click me</Button>
      <div className="text-rose-500 font-bold text-2xl">Hello World</div>
      </>
    );

}
