import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex gap-3">
      <Link href="/sign-up">
        <Button variant="secondary" className="w-20">
          Register
        </Button>
      </Link>
      <Link href="/sign-in">
        <Button variant="default" className="w-20">
          Login
        </Button>
      </Link>
    </div>
  );
};

export default LandingPage;
