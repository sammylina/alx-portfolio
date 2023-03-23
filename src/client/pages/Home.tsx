import { useEffect, useState } from "react";
import {remult} from 'remult'
import Tweet from "../../shared/Tweet";
import TweetBox from "../components/TweetBox";
import Feed from '../components/Feed'
import CreateTweet from "../components/CreateTweet";
import Header from '../components/Header'

const tweetRepo = remult.repo(Tweet)

export default function MainView() {

    const [tweets, setTweets] = useState<Tweet[]>([])

    useEffect(() => {
        tweetRepo.find({
            orderBy: {postedAt: 'desc'}
        }).then(setTweets)
    }, [])

    const postTweet = async (value: string) => {
        const tweet = {
            value,
        }
        try {
            const newTweet = await tweetRepo.insert(tweet);
            setTweets([newTweet, ...tweets])
        }catch(e: any) {
            console.log('POST_TWEET_ERROR: ', e.message)
        }
    }
    return (
        <div className='bg-grey-50 border-r'>
            <Header/>
            <Feed>
                <CreateTweet postTweet={postTweet}/>
                <div className='border-b'></div>
                {
                    tweets.map(({id, value, postedAt}) => {

                        return <TweetBox key={id} id={id} value={value} postedAt={postedAt}/>
                    })
                }
            </Feed>
            
        </div>
    )
}