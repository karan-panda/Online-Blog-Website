import React from 'react'
import BlogContainer from '@/components/BlogContainer'
import BlogsInfo from '../BlogsInfo';
import RecommendationList from '@/components/RecommendationList';
import Advertisement from '@/components/Adverisement';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const page = () => {
    const { id, title, author, thumbnailImageURL, content } = BlogsInfo[0];

    return (
        <div>
            <Navbar />

            <div>
                <BlogContainer
                    key={id}
                    title={title}
                    author={author}
                    thumbnail={thumbnailImageURL}
                    content={content}
                />
            </div>

            <div className="min-h-screen md:m-12 md:p-12">
                <h2 className="text-2xl font-bold ml-8"> Recommendations</h2>
                <div className="flex flex-wrap justify-center">
                    <RecommendationList />
                    <Advertisement />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default page