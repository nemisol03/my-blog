import { useEffect, useState } from 'react';
import FeatureItem from './FeatureItem';
import instance from '~/config/axiosConfig';
import { Swiper, SwiperSlide } from 'swiper/react';

function FeaturePost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const res = await instance.get('posts');
            setPosts(res.data.data);
        }
        getPosts();
    }, []);

    return (
        <div >
            {/* {posts && posts.length > 0 && (
                <div className=" mt-12">
                    <h3 className=" relative  text-primary text-xl font-medium border-t-heading">Technology</h3> */}

                    <div className="feature-post-list">
                        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={'auto'}>
                            {posts.map((post) => (
                                <SwiperSlide key={post.id}>
                                    <FeatureItem post={post} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                 </div>
           
    );
}

export default FeaturePost;
