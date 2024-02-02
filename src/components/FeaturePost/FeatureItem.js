import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "~/config/axiosConfig";
import dateConverter from "~/utils/convertDate";


function FeatureItem({post}) {
    const [tag,setTag] = useState('');
    const [author,setAuthor] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        async function getTag() {
            const tag = await instance.get(`tags/${post.tag.id}`);
            setTag(tag.data);
        }

        async function getAuthor() {
            const author = await instance.get(`users/${post.user.id}`);
            setAuthor(author.data);
        }

        getTag();
        getAuthor();
    },[])
   
    return (
        <div className="bg-slate-800 flex flex-col rounded-lg p-3 h-full select-none">
        <img
            src={post.image_url || '/thumb-default.jpg'}
            alt=""
            className="h-[200px] object-cover"
        />
        <div className="py-4 flex flex-col flex-1 ">
            <h3 className="text-white">{post.title}</h3>
            <div className="flex items-center justify-between opacity-50 my-2">
                <span>{dateConverter(post.created_at)}</span>
                <span>23ds</span>
            </div>
            <button onClick={() => navigate(`/posts/${post.slug}`)} className="bg-primary py-2.5 px-5 rounded-lg w-full mt-auto">Watch Now</button>
        </div>
    </div>
    );
}

export default FeatureItem;
