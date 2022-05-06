import Image from 'next/image';

export const Hero = () =>  {
    return (
        <>
        <div className='py-10 bg-[#6bc2c3]'>
            <div className='mx-auto max-w-[90%]'>
                <div className='grid grid-cols-2'>
                    <div className='flex items-center'>
                        <div className='text-white'>
                            <p className='text-4xl font-bold'>メインタイトル</p>
                            <p className='mt-5 text-3xl text-primary-lightest'>サブタイトル</p>
                        </div>
                    </div>
                    <div className='grid justify-items-end'>
                        <Image src='/images/hero.png' alt='' width={585} height={498} />   
                    </div>   
                </div>
            </div>
        </div>
         
        </>
    )
}