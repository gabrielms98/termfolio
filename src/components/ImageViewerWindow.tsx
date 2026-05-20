import WindowFrame from "./WindowFrame";
import ProfilePic from "../assets/profile-pic.jpeg";

function ImageViewerWindow({ appId = "IMAGE_APP" }: { appId?: string }) {
  return (
    <WindowFrame
      appId={appId}
      title="profile-pic.jpeg"
      className="bg-[#1e1e1e] rounded-xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col"
      headerClassName="bg-[#2a2a2a] border-b border-[#3a3a3a]"
    >
      <div className="bg-[#1e1e1e] p-1">
        <img
          src={ProfilePic}
          alt="Gabriel Martins"
          className="block max-w-[36rem] max-h-[28rem] object-contain rounded"
        />
      </div>
    </WindowFrame>
  );
}

export default ImageViewerWindow;
