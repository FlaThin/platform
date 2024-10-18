"use client";

import { RxUpload } from "react-icons/rx";

interface DropZoneProps {
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DropZone: React.FC<DropZoneProps> = ({ handleFileChange }) => {
    return (
        <div className="w-full">
            <div className="flex flex-col border-2 h-52 border-dashed border-blue-700 border-opacity-50 rounded-2xl text-center transition-colors">
                <input
                    className="file-input hidden"
                    id="fileInput"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                />
                <label htmlFor='fileInput' className="flex flex-col items-center justify-center w-full h-full file-label cursor-pointer p-10 rounded-2xl ">
                    <RxUpload className="upload-icon text-5xl text-black mb-2" />
                    <p className="text-black-600 text-base">Drag &amp; Drop or click to upload</p>
                </label>
            </div>
        </div>
    );
};