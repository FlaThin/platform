import { FiFilm } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
import { LuTrash } from "react-icons/lu";
import { HiOutlineSave } from "react-icons/hi";


export function FileItem({ selectedFiles, uploadProgress }: { selectedFiles: File[], uploadProgress: { [key: string]: number } }) {
    return (
        <>
            {selectedFiles.map((file) => (
                <div key={file.name} className="relative flex flex-col justify-center w-full border-2 h-fit bg-[#F3F5F7] rounded-2xl p-3">
                    <div className="flex flex-1 justify-between">
                        <div className='flex gap-2 items-center'>
                            <div className="flex h-10 w-10 bg-white rounded-xl items-center justify-center border-2 cursor-pointer">
                                <FiFilm size={26} />
                            </div>
                            <div className="flex flex-1 flex-col">
                                <h3 className="font-bold truncate max-w-40">{file.name}</h3>
                                <h3 className='font-semibold text-xs text-[#6B7E90]'>{(file.size / (1024 * 1024)).toFixed(1)} MB</h3>
                            </div>
                        </div>
                        {uploadProgress[file.name] !== 100 && (
                            <div className="absolute top-2 right-2 cursor-pointer">
                                <IoCloseOutline size={28} />
                            </div>
                        )}
                        {uploadProgress[file.name] === 100 && (
                            <div className='flex gap-2 items-center'>
                                <button className='h-9 w-9 bg-white rounded-xl flex items-center justify-center border-2 cursor-pointer'>
                                    <HiOutlineSave size={16} color='#6B7E90' />
                                </button>
                                <button className='h-9 w-9 bg-white rounded-xl flex items-center justify-center border-2 cursor-pointer'>
                                    <LuTrash size={16} color='#6B7E90' />
                                </button >
                            </div>
                        )}
                    </div>
                    {uploadProgress[file.name] !== 100 && (
                        <div className="flex items-center gap-2 mt-3">
                            <div className="w-full flex items-center bg-gray-300 rounded-full h-2">
                                <div
                                    className="bg-blue-700 h-2 transition-all duration-75 rounded-full"
                                    style={{ width: `${uploadProgress[file.name] || 0}%` }}
                                ></div>
                            </div>
                            <div className='font-semibold text-sm text-[#6B7E90]'>{uploadProgress[file.name] || 0}%</div>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}

