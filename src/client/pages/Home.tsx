import { useEffect, useState } from "react";
import {remult} from 'remult'
import Tweet from "../../shared/Tweet";
import TweetBox from "../components/TweetBox";
import Feed from '../components/Feed'
import CreateTweet from "../components/CreateTweet";
import Header from '../components/Header';
import User from "../../shared/User";

const tweetRepo = remult.repo(Tweet)

interface authProps {
    username: string,
    loggedIn: boolean,
    setLoggedIn: (loggedIn: boolean) => void,
    setCurrentUser: (username: string) => void,
    setShowLogin: (show: boolean) => void,
    setShowRegister: (show: boolean) => void,
}

export default function MainView({username, loggedIn, setShowLogin, setShowRegister, setLoggedIn, setCurrentUser}: authProps) {

    const [tweets, setTweets] = useState<Tweet[]>([])

    useEffect(() => {
        tweetRepo.find({
            orderBy: {postedAt: 'desc'}
        }).then((tweets)  => {
            setTweets(tweets)
        })
        fetch('/api/currentUser').then(async res => {
            remult.user = await res.json()
            if (remult.user) {
                setLoggedIn(true)
                const currentUser = remult.user.name || 'no currentuser'
                setCurrentUser(currentUser)
                console.log("remult.user: ", remult.user)
                //setCurrentUser(remult.user.name)
            }
            console.log("loggedInUser: ", loggedIn, username)
        }).catch(err => {
            console.log("no user logged in")
        })
    }, [])

    const postTweet = async (value: string) => {
        const newUser = remult.repo(User).create(remult.user)
        const tweet = {
            user: newUser,
            value
        }
        try {
            const newTweet = await tweetRepo.insert(tweet);
            setTweets([newTweet, ...tweets])
        }catch(e: any) {
            console.log('POST_TWEET_ERROR: ', e.message)
        }
    }
    return (
        <div className='bg-grey-30 border-r'>
            <Header username={username} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} showRegisterDialog={setShowRegister} showLoginDialog={setShowLogin}/>
            <Feed>
                {loggedIn && (<CreateTweet postTweet={postTweet}/>)}
                <div className='border-b'></div>
                {
                    tweets.map(({id, value, postedAt, user}) => {

                        return <TweetBox key={id} id={id} value={value} user={user}  postedAt={postedAt}/>
                    })
                }
            </Feed>
            
        </div>
    )
}