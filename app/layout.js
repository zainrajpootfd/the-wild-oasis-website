import Header from "./_components/Header";
import "./_style/globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s/ The Wild Oasis", // No space between '%' and 's'
    default: "Welcome / The Wild Oasis",
  },
};

export default function ({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-900 text-primary-100 min-h-screen flex flex-col `}
      >
        <Header />
        <div className="flex-1 px-8 py-12 mx-auto grid">
          <main className="max-w-7xl w-full ">{children}</main>
        </div>
      </body>
    </html>
  );
}
