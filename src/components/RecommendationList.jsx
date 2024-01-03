import React from 'react'
import blogs from '../app/BlogsInfo'
import Recommendation from './Recommendation'

const RecommendationList = () => {
    return (
        <div className="lg:w-3/5 h-screen overflow-y-auto">
            {blogs.map((blog, index) => (
                <Recommendation key={index} blog={blog} />
            ))}
        </div>
    )
}

export default RecommendationList