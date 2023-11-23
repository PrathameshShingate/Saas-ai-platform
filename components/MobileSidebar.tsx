"use client";

import { Menu } from "lucide-react";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

interface MobileSidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const MobileSidebar = ({
  apiLimitCount,
  isPro = false,
}: MobileSidebarProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger>
        <span className="md:hidden hover:bg-accent inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors">
          <Menu />
        </span>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
