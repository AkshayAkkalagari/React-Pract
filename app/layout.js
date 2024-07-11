import Header from "@/Components/Header";
import "./globals.css";
import MyContext from "./Helper/Context";

// suppressHydrationWarning => prevents small or basic errors

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>  
        {/* <Header/> */}
        <MyContext>{children}</MyContext>
      </body>
    </html>
  );
}
