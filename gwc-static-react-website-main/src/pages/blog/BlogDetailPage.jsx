import React, { useEffect } from 'react'
import BlogDetail from '../../components/blog/BlogDetail'

const BlogDetailPage = () => {


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        return () => { };
    }, []);
    return (
        <>
            <BlogDetail />
        </>
    )
}

export default BlogDetailPage
