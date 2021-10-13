import supabase from "../utils/supabase";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isUploading, setIsUploading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState();

  const user = supabase.auth.user();

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    setIsUploading(true);

    const { data, error } = await supabase.storage
      .from("my-bucket")
      .upload(`public/${file.name}`, file, { upsert: true });

    setIsUploading(false);
    setDownloadUrl(`${window.location.origin}/downloads/${file.name}`);

    console.log({ data, error });
  };

  return user ? (
    <div>
      {isUploading && <p>Uploading file...</p>}
      {downloadUrl && <p>{downloadUrl}</p>}
      {!isUploading && !downloadUrl && (
        <input type="file" onInput={handleUpload} />
      )}
    </div>
  ) : (
    <Link href="/login">
      <a>Create an account</a>
    </Link>
  );
}
