import moment from 'moment'
import User from '../../shared/User'

interface Tweetbox {
    value: string,
    postedAt: Date,
    user: User,
    id: string,

}

const TweetBox: React.FC<Tweetbox> = ({value, postedAt, user}): JSX.Element =>  {
    //console.log('tweet: ', value)
    return (
        <div className='flex-col p-2 border-b my-2'>
            <div className='flex items-center'>
                <p></p>
                <div className='flex items-center space-x-1 px-2'>
                    <p className='font-medium text-sm pr-2 text-blue-600'>{user.name}</p>
                    <p className='text-gray-400 text-sm'>{moment(postedAt).fromNow(true)}</p>
                </div>
            </div>
            <div className="pl-8 py-2">
                <p className='text-sm font-medium'>{value}</p>
            </div>
            <div className='my-2'>
                <span className='p-1 bg-blue-300 text-white mx-2 text-sm'>like</span>
                <span className='p-1 bg-blue-300 text-white mx-2 text-sm'>comment</span>
                <span className='p-1 bg-blue-300 text-white mx-2 text-sm'>retweet</span>
            </div>
        </div>
    )
}

export default TweetBox;