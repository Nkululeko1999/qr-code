import GenerateQrCode from "../components/GenerateQrCode";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <div className="container mt-3 mt-sm-5">
        <div className="content">
          <div className="generate-qrcode-box">
            <GenerateQrCode />
          </div>
          <div className="show-qrcode-box"></div>
        </div>
      </div>
    </div>
  );
}
