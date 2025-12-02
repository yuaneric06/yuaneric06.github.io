export default function CurrentProjectElement(props) {
    const { title, description, status, color, icon, ...rest } = props.data;
    console.log(props);
    return (
        <div
            className="bg-white border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all pixel-corners animate-pixelate-in"
        >
            <div className={`w-full h-24 ${color} border-b-4 border-black flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 11px)',
                    }}
                />
                <span className="text-5xl relative z-10">{icon}</span>
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xs sm:text-sm flex-1">{title}</h3>
                    <span className="bg-black text-white px-2 py-1 text-[10px] border-2 border-black ml-2">
                        {status}
                    </span>
                </div>

                <p className="text-xs leading-relaxed mb-4">{description}</p>
            </div>
        </div>
    )
}