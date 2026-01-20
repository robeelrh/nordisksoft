// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown } from "lucide-react";
// import { useLocale } from "next-intl";
// import { useRouter } from "@/i18n/navigation";
// import { usePathname } from "next/navigation";
// import { routing } from "@/i18n/routing";

// const languages = [
//   { value: "en", label: "English", flag: "🇺🇸" },
//   { value: "no", label: "Norwegian", flag: "🇳🇴" },
// ];

// export default function LanguageSelect() {
//   const [open, setOpen] = useState(false);
//   const locale = useLocale();
//   const currentLocale = locale || "en";
//   const router = useRouter();
//   const pathname = usePathname();

//   const handleChange = (val: string) => {
//     // remove current locale segment
//     const segments = pathname.split("/");
//     if (
//       routing.locales.includes(segments[1] as (typeof routing.locales)[number])
//     ) {
//       segments.splice(1, 1);
//     }
//     const cleanPath = segments.join("/") || "/";
//     router.push(cleanPath, { locale: val });
//     router.refresh();
//     setOpen(false);
//   };

//   const selected =
//     languages.find((l) => l.value === currentLocale) || languages[0];

//   return (
//     <div className="relative w-40">
//       {/* Trigger */}
//       <button
//         className="w-full flex items-center justify-between px-4 py-3 border border-[#56aeff] text-white rounded-lg font-semibold bg-transparent"
//         onClick={() => setOpen(!open)}
//       >
//         <span className="flex items-center gap-2">
//           <span>{selected.flag}</span>
//           <span>{selected.label}</span>
//         </span>
//         <ChevronDown
//           className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
//         />
//       </button>

//       {/* Dropdown */}
//       <AnimatePresence>
//         {open && (
//           <motion.ul
//             initial={{ opacity: 0, y: -5 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -5 }}
//             transition={{ duration: 0.2 }}
//             className="absolute left-0 mt-2 w-full bg-white border border-[#56aeff] rounded-lg shadow-lg z-50"
//           >
//             {languages.map((lang) => (
//               <li
//                 key={lang.value}
//                 onClick={() => handleChange(lang.value)}
//                 className={`px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-700 ${
//                   lang.value === currentLocale ? "bg-gray-700" : ""
//                 }`}
//               >
//                 <span>{lang.flag}</span>
//                 <span>{lang.label}</span>
//               </li>
//             ))}
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

const languages = [
  { value: "en", label: "English", flag: "🇺🇸" },
  { value: "no", label: "Norwegian", flag: "🇳🇴" },
];

export default function LanguageSelect() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const currentLocale = locale || "no";
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (val: string) => {
    const segments = pathname.split("/");
    if (
      routing.locales.includes(segments[1] as (typeof routing.locales)[number])
    ) {
      segments.splice(1, 1);
    }
    const cleanPath = segments.join("/") || "/";
    router.push(cleanPath, { locale: val });
    router.refresh();
    setOpen(false);
  };

  const selected =
    languages.find((l) => l.value === currentLocale) || languages[0];

  return (
    <div className="relative w-40">
      {/* Trigger */}
      <button
        className="w-full flex items-center justify-between px-4 py-3 border border-[#56aeff] text-white rounded-lg font-semibold bg-transparent"
        onClick={() => setOpen(!open)}
      >
        <span className="flex items-center gap-2">
          <span>{selected.flag}</span>
          <span>{selected.label}</span>
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-full bg-white border border-[#56aeff] rounded-lg shadow-lg z-50 overflow-hidden"
          >
            {languages.map((lang) => (
              <li
                key={lang.value}
                onClick={() => handleChange(lang.value)}
                className={`px-4 py-2 cursor-pointer flex items-center gap-2 text-gray-800 hover:bg-[#f0f8ff] ${
                  lang.value === currentLocale
                    ? "bg-[#e6f3ff] font-semibold text-[#0560d4]"
                    : ""
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
