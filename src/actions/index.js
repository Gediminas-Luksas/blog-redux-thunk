import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fethPosts = () => async dispath => {
        const response = await jsonPlaceholder.get('/posts');
    
      dispath({ type: 'FETCH_POSTS', payload: response })  
    };