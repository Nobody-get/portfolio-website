import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Youssef Abdelaziz | Data Engineering & Information Systems Portfolio",
  description:
    "Professional portfolio of Youssef Abdelaziz, an Information Systems student and Working Student Data Engineer specializing in Microsoft Fabric, SQL, PySpark, Power BI, Flutter, Firebase, and scalable data solutions.",
  openGraph: {
    title: "Youssef Abdelaziz | Data Engineering Portfolio",
    description:
      "Explore projects, skills, Microsoft Fabric certifications, and professional experience in data engineering and software development.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
