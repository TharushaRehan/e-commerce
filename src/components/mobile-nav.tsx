import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/config/site";
import { ChevronDown, Menu } from "lucide-react";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="block lg:hidden">
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        {navLinks.map((nav) => (
          <div
            key={nav.name}
            className="flex items-center py-3 border-b border-neutral-200"
          >
            <p className="font-medium">{nav.name}</p>
            {nav.expandable && <ChevronDown />}
          </div>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
