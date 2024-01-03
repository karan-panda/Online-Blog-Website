import React from 'react'
import BlogContainer from '@/components/BlogContainer'
import BlogsInfo from '../BlogsInfo';
import RecommendationList from '@/components/RecommendationList';
import Advertisement from '@/components/Adverisement';

const page = () => {
    const { id, title, author, thumbnailImageURL, content } = BlogsInfo[0];

    return (
        <div>

            {/* To Display the Blog Container Component */}
            <div>
                <BlogContainer
                    key={id}
                    title={title}
                    author={author}
                    thumbnail={thumbnailImageURL}
                    content={content}
                />
            </div>

            {/* To Display the Recommendations Component */}
            <div className="min-h-screen md:m-12 md:p-12">
                <h2 className="text-2xl font-bold ml-8"> Recommendations</h2>
                <RecommendationList />
                <Advertisement />
            </div>
        </div>
    )
}

export default page