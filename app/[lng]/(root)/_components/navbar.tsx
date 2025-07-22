"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "@/i18next/client";
import { navLinks } from "@/constants";

import Globalsearch from "./GlobalSearch";
import Languagemenu from "@/components/shared/language-menu";
import Modetoggle from "@/components/shared/mode-toggle";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import UserBox from "@/components/shared/user-box";

const Navbar = () => {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string);

  return (
    <div className="fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between border-b">
        <div className="flex items-center gap-4">
          <h1 className="text-xl text-foreground">OnlyCourses</h1>
          <div className="flex items-center gap-3 pl-2">
            {navLinks.map((nav) => (
              <Link
                key={nav.route}
                href={`/${lng}/${nav.route}`}
                className="font-medium transition-all hover:text-blue-500 hover:underline"
              >
                {t(nav.title)}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 border-r pr-3">
            <Globalsearch />
            <Languagemenu />
            <Button size="icon" variant="ghost">
              <ShoppingCart />
            </Button>
            <Modetoggle />
          </div>

          <SignedIn>
            <UserBox />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost" size="lg" className="rounded-full">
                {t("logIn")} {/* ✅ From your JSON */}
              </Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button variant="ghost" size="lg" className="rounded-full">
                {t("signUp")} {/* ✅ From your JSON */}
              </Button>
            </SignUpButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Navbar;