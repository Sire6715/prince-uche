"use client";
import Link from "next/link";
import ThemeToggle from "../portfolio/ThemeToggle";
import { CONTACTS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import IconLabel from "../common/IconLabel";

const MobileSidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 z-50 h-full w-full bg-background text-foreground flex flex-col px-8 py-6"
          >
            {/* Header row */}
            <div className="flex justify-between items-center mb-12">
              <h1 className="font-black text-4xl">UP</h1>
              <button onClick={onClose} aria-label="Close menu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-8 flex-1">
              {[
                { label: "HOME", href: "/" },
                { label: "RESUME", href: "/resume" },
                { label: "CONTACT", href: "mailto:uchepibe@gmail.com" },
                { label: "PROJECTS", href: "/projects" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="text-4xl font-black tracking-tight hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center justify-between pt-6 border-t border-border">
              <IconLabel contacts={CONTACTS} />
              <ThemeToggle />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;