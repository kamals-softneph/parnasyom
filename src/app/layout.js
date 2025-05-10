import "./globals.css";
export const metadata = {
  title: "ParnasYom | Less Solicitations and More Dedications",
  description: "It's the ultimate solution for any shul, mikvah, or non-profit organization. Members will take pride in owning their day or month and they will do it again and again! Because it's not just a Donation, it's a Legacy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
