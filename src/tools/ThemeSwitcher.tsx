'use client'
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className=" flex gap-3 flex-col">
      <div>
        <button onClick={() => setTheme("light")}  >
          <Sun color={`${theme === "light" ?  'black': 'white'}`} />
        </button>
      </div>
      <div>
        <button onClick={() => setTheme("dark")} >
           <Moon color={`${theme === "light" ?  'black': 'white'}`}/>
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;