import { Inter } from "next/font/google";
import "./globals.css";
import RespondentlistState from "./context/RespondentlistState";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Testingninja",
  description: "AI based skill testing platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <RespondentlistState>{children}</RespondentlistState>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/datepicker.min.js"
          async
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js"
          async
        />
      </body>
    </html>
  );
}
