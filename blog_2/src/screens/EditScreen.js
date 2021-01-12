import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    
    const { state, editBlogPost } = useContext(Context);
    const id = navigation.getParam('id');
    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <BlogPostForm 
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(newTitle, newContent) => {
                editBlogPost(id, newTitle, newContent)
        }}/>
    )
}

export default EditScreen;