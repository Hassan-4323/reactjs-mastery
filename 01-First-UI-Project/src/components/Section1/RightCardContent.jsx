const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
            <h2 className='text-2xl font-semibold bg-white w-8 h-8 rounded-full flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-shadow-2xs text-1xl leading-normal text-white mb-9 font-medium'>Lorem ipsum, dolor sit amet consectetur, magni eius quia in praesentium corrupti repellendus?</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor: props.color}} className='font-semibold text-white px-4 py-1 rounded-full'>{props.tag}</button>
                    <button style={{backgroundColor: props.color}} className='font-semibold text-white px-4 py-1 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
