"use client";
import Link from "next/link";
import { items } from "@/data/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="w-screen justify-between p-4">
        <NavigationMenuItem>
          <Link href="/">Fencing @ UCR</Link>
        </NavigationMenuItem>

        <div className="flex gap-4">
          {items.map(({ link, name }, index) => (
            <NavigationMenuItem key={index}>
              <Link
                href={link}
                className={
                  pathname === link ? "text-fencing-border-blue underline" : ""
                }
              >
                {name}
              </Link>
            </NavigationMenuItem>
          ))}
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
