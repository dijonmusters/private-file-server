import supabase from "../utils/supabase";
import { useEffect, useState } from "react";

const DownloadPage = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const getFiles = async () => {
      const { data } = await supabase.storage.from("my-bucket").list("public");
      setFiles(data);
    };

    getFiles();
  }, []);
  return (
    <div>
      {files.map((file) => (
        <p>
          <a href={`/downloads/${file.name}`} download={file.name}>
            {file.name}
          </a>
        </p>
      ))}
    </div>
  );
};

export default DownloadPage;
