import check from '/checks.webp'

export function Newcheck({text}){

    return (
        
        <div className='flex flex-col gap-[15px] items-center '>
    <img className='w-[50px] h-[50px] invert' src={check} alt="" />
    <span className='text-[#EFECE3] font-[500] text-[20px] justify-center'>{text}</span>
</div>
)




}
