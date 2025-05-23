import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Button } from "../ui/button";


interface FileUploaderProps {
  fieldChange: (file: FileWithPath[]) => void;
  mediaUrl: string;
}


const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {
  const [file, setFile] = useState<File[]>([])
  const [fileUrl, setFileUrl] = useState(mediaUrl);


  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFile(acceptedFiles);
    fieldChange(acceptedFiles)
    setFileUrl(URL.createObjectURL(acceptedFiles[0]));
  }, [file]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".gif", ".jpg", ".jpeg"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer"
    >
      <input {...getInputProps()} className="cursor-pointer" />
      {fileUrl ? (
        <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
          <img
            src={fileUrl}
            alt="image"
            className="file-uploader-image"
            width={150}
            height={150}
          />
          <p className="file_uploader-label"> click or drag photo to replace </p>
        </div>
      ) : (
        <div className="file-uploader-box">
          <img
            src="/assets/icons/file-upload.svg"
            width={96}
            height={77}
            alt="file-uploader"
          />

          <h3 className="base-medium text-light-2 mb-2  mt-6">
            Drag Photos Here!
          </h3>
          <p className="text-light-4 small-regular mb-6">SVG, PNG, JPG</p>

          <Button className="shad-button_dark_4">select from computer</Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
