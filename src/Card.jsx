// eslint-disable-next-line react/prop-types
export default function Card({children}){
    return(
        <div className='w-1/2 shadow shadow-md flex flex-col p-5 gap-5 rounded-md bg-white'>
            {children}
        </div>
    )
}