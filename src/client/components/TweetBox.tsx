import Tweet from '../../shared/Tweet'
import moment from 'moment'

const TweetBox: React.FC<Tweet> = ({value, postedAt}): JSX.Element =>  {
    console.log('tweet: ', value)
    return (
        <div className='flex-col p-2 border-b'>
            <div className='flex items-center'>
                <img className='rounded-full border' src="https://pbs.twimg.com/profile_images/1005827060617695233/XiH6yzF5_normal.jpg" alt='img'/>
                <div className='flex items-center space-x-1 px-2'>
                    <p className='font-bold'>Elon musk</p>
                    <p className='text-gray-400'>{moment(postedAt).fromNow(true)}</p>
                </div>
            </div>
            <div className="pl-8 py-2">
                <p>{value}</p>
            </div>
            <div>action buttons</div>
        </div>
    )
}

export default TweetBox;