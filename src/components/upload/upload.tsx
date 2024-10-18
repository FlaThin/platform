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
        <div className='w-full h-full flex justify-center gap-6 pb-3'>
            <div className='w-full h-full flex flex-col justify-center bg-[#FBFBFB] rounded-3xl'>

            </div>

            <div className='w-full h-full flex flex-col justify-center gap-6'>
                <div className='w-full flex flex-col flex-1 bg-[#FBFBFB] rounded-3xl p-6 gap-3'>
                    <DropZone handleFileChange={handleFileChange} />
                    <p className='font-semibold text-xs text-[#6B7E90] mb-3'>Max files sizes: 10GB</p>

                    <div className="flex flex-col max-h-48 w-full overflow-y-auto gap-2">
                        <FileItem selectedFiles={selectedFiles} uploadProgress={uploadProgress} />
                    </div>
                </div>

                <div className='bg-[#FBFBFB] rounded-3xl h-fit w-full flex flex-col p-6 gap-4'>
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
            </div>

            <div className='w-full h-full flex flex-col justify-center bg-[#FBFBFB] rounded-3xl'>

            </div>



            {
                /*
            <div className='flex flex-1 flex-col items-center w-11/12 max-w-sm bg-white rounded-3xl p-6 gap-8'>
                            <DropZone handleFileChange={handleFileChange} />
                        
                            <div className="flex flex-1 flex-col w-full max-h-96 space-y-4 overflow-y-auto">
                                <FileItem selectedFiles={selectedFiles} uploadProgress={uploadProgress} />
                            </div>
                        </div>
                        <div className='flex w-11/12 max-w-2xl bg-white rounded-3xl p-8'></div>
                */
            }
        </div>
    );
};

export default UploadMediaComponent;
