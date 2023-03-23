import {FormEvent, useState} from 'react'


const CreateTweet = ({postTweet}: any) => {

    const [tweetValue, setTweetValue] = useState('')

    const post = (e: FormEvent) => {
        e.preventDefault();
        postTweet(tweetValue)
        setTweetValue('');
    }

    return (
        
        <div className='p-4 bg-white'>
            <div className='flex'>
            <div className='p-2'>
                <img className='border  rounded-full' src='https://pbs.twimg.com/profile_images/1005827060617695233/XiH6yzF5_normal.jpg'/>
            </div>
            <div className='flex-1 pt-3'>
                <input 
                    className='pb-0 px-2 w-full outline-none text-md text-gray-500'
                    placeholder="What's happening?"
                    value={tweetValue}
                    onChange={(e) => setTweetValue(e.target.value)}
                />             
            </div>
            </div>
            <div className='border-b'></div>
            <div className='flex justify-end pt-3'>
                <button className='rounded-full px-6 py-1 text-white bg-blue-400' onClick={post}>Tweet</button>
            </div>
        </div>
    );
}

export default CreateTweet;