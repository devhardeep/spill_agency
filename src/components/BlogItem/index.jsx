/* eslint-disable react/prop-types */
import React from 'react';
import "./_blogItem.scss";

const BlogItem = ({ data }) => {
    // rendering components
    return (
        <div className="blog-item-container">
            <img src={data.image.file.url} className="blog-img" loading="lazy" />
            <div className="blog-item-title">{data.title}</div>
            <div className="blog-item-content">{data.description.description}</div>
            <div className="blog-item-splitter-line" />
        </div >
    )
};

export default BlogItem;