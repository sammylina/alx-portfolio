import {FC, FormEvent, useState} from 'react'

const CreateTweet = ({postTweet}: any) => {

    const [tweetValue, setTweetValue] = useState('')

    const post = (e: FormEvent) => {
        e.preventDefault();
        postTweet(tweetValue)
        setTweetValue('');
    }

    return (
        <>
            <form onSubmit={post}>
                <input 
                    type='text'
                    onChange={(e) => setTweetValue(e.target.value)}
                />
                <button onClick={post}></button>
            </form>
        </>
    );
}

export default CreateTweet;