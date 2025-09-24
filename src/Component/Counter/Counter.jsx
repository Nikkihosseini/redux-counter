


export default function Counter(){
    return(
        <>
            <div className="flex items-center justify-center w-screen h-screen">
               <div className="flex flex-col items-center gap-y-10">
                    <div className="border-b-[3px] border-orange-400 text-blue-700 text-2xl font-extrabold">count</div>
                    <div className="flex items-center justify-center h-16 gap-5">
                        <div className="flex items-center justify-center bg-green-600 hover:bg-green-700 w-16 h-full rounded-md text-2xl text-slate-100 font-extrabold pb-1 cursor-pointer transition-all">+</div>
                        <div className="flex items-center justify-center bg-red-600 hover:bg-red-700 w-16 h-full rounded-md text-2xl text-slate-100 font-extrabold pb-1 cursor-pointer transition-all">-</div>
                        <div className="flex items-center justify-center bg-green-600 hover:bg-green-700 w-ah-auto h-auto p-4 rounded-md text-2xl text-slate-100 font-extrabold cursor-pointer transition-all">Reset</div>
                    </div>
               </div>
            </div>
        </>
    )
}