"use client";

import { useState } from 'react';
import { uploadMedia } from '../../use-cases/use-upload/index';
import { FileItem } from './upload-components/file-item';
import { DropZone } from './upload-components/dropzone';

const UploadMediaComponent: React.FC = () => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
    const [uploadStatus, setUploadStatus] = useState<string>('');

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (!files) return setUploadStatus('No files selected.');

        const filesArray = Array.from(files);

        // Prevent uploading duplicate files
        const newFiles = filesArray.filter((file) => !selectedFiles.find(f => f.name === file.name));

        setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);

        for (const file of newFiles) {
            await handleUpload(file);
        }
    };

    const handleUpload = async (file: File) => {
        setUploadProgress((prev) => ({ ...prev, [file.name]: 0 }));
        setUploadStatus('Uploading...');

        try {
            const result = await uploadMedia(file, (progressEvent) => {
                if (progressEvent && progressEvent.total) {
                    const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress((prev) => ({ ...prev, [file.name]: progress }));
                }
            });

            setUploadStatus('Upload successful!');
        } catch (error) {
            setUploadStatus('Upload failed.');
        }
    };

    return (
        <div className='w-full h-full grid grid-cols-3 grid-rows-4 justify-center gap-6'>
            <div className='w-full h-full row-span-4 flex flex-col justify-center bg-[#FBFBFB] rounded-3xl'>

            </div>

            <div className='w-full h-full row-span-3 flex flex-col justify-center gap-6'>
                <div className='w-full flex flex-col flex-1 bg-[#FBFBFB] rounded-3xl p-6 gap-3'>
                    <DropZone handleFileChange={handleFileChange} />
                    <p className='font-semibold text-xs text-[#6B7E90] mb-3'>Max files sizes: 10GB</p>

                    <div className="flex flex-col flex-1 w-full overflow-y-auto gap-2">
                        <FileItem selectedFiles={selectedFiles} uploadProgress={uploadProgress} />
                    </div>
                </div>
            </div>

            <div className='bg-[#FBFBFB] rounded-3xl col-start-2 row-span-1 w-full flex flex-col p-6 gap-4'>
                <div className='bg-[#EFEFEF] border-2 rounded-lg w-full min-h-16 flex items-center justify-center'>
                    <h1 className=''></h1>
                </div>
                <div className='w-full min-h-11'>
                    <div>
                        <h3 className='font-bold'>Ready to Delete</h3>
                        <p className='font-semibold text-base text-[#6B7E90]'>Up to 46 GB</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col row-start-1 col-start-3 row-span-4 justify-center bg-[#FBFBFB] rounded-3xl'>

            </div>
        </div>
    );
};

export default UploadMediaComponent;
