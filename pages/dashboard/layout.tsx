
import FooterOne from "../../components/Footer/FooterOne";
import HeaderOne from "../../components/Header/HeaderOne";


interface layoutProps {
  children: React.ReactNode;
}



export default function ChatLayout({ children }: layoutProps) {
  return (
    <>
      <HeaderOne />
      {children}
      <FooterOne />
    </>
  );
}
