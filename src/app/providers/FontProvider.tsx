import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

interface FontProviderProps {
  children: React.ReactNode;
}

export const FontProvider: React.FC<FontProviderProps> = ({ children }) => (
  <div className={montserrat.className}>{children}</div>
);
