import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import Table from '~/components/Table';
import { IconAdjust, IconDelete, IconEye } from '~/components/icons';

import Pagination from '~/components/pagination';
import instance from '~/config/axiosConfig';
import postService from '~/services/postService';
import dateConverter from '~/utils/convertDate';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReactPaginate from 'react-paginate';

function ManagePosts() {
    const [itemOffset, setItemOffset] = useState(1);
    const [nextPage, setNextPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await instance.get(`posts/manage/all?pageSize=2&pageNo=${nextPage}`);
                setLoading(false);
                console.log(response.data);
                setPosts(response.data);
            } catch (error) {
                setLoading(false);
                console.error('Error fetching data:', error);
                // Handle errors as needed
            }
        };

        fetchData();
    }, [nextPage]);

    const handleDeletePost = async (id) => {
        try {
            await postService.delete(id);
            setPosts(posts.filter((post) => post.id !== id));
            toast.success('Post deleted successfully');
        } catch (e) {
            console.log(e);
        }
    };

    const onDelete = (id) => {
        return confirmAlert({
            title: 'Confirm',
            message: "Are you sure you want to delete this post's id:" + id,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => handleDeletePost(id),
                },
                {
                    label: 'No',
                },
            ],
        });
    };

    const pageCount = Math.ceil(posts.total_elements / posts.page_size);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * posts.page_size) % posts.total_elements;

        setItemOffset(newOffset);
        setNextPage(event.selected + 1);

    };

    return (
        <div className="">
            <h1 className="text-primary font-medium text-2xl text-center mb-10">Manage posts</h1>
            {!loading && (
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Post</th>
                                <th>Category</th>
                                <th>Author</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts?.data?.map((post) => (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>
                                        <div className="flex items-center gap-x-3">
                                            <img
                                                src={post.thumbnail}
                                                alt=""
                                                className="w-[66px] h-[55px] rounded object-cover"
                                            />
                                            <div className="flex-1">
                                                <h3 className="font-semibold">{post.title}</h3>
                                                <time className="text-sm text-gray-500">
                                                    {dateConverter(post.created_at)}
                                                </time>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-primary text-gray-100 ">
                                            {post.tag.name}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="text-gray-500">
                                            {post.user.first_name + ' ' + post.user.last_name}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="text-gray-500">{post.status}</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-x-3 text-gray-500">
                                            <Link to={`/posts/${post.slug}`} className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded cursor-pointer">
                                                <IconEye />
                                            </Link>
                                            <Link
                                                to={`/manage/update-post/${post.id}`}
                                                className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded cursor-pointer"
                                            >
                                                <IconAdjust />
                                            </Link>

                                            <span
                                                onClick={() => onDelete(post.id)}
                                                className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded cursor-pointer"
                                            >
                                                <IconDelete />
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="mt-10">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="< previous"
                            renderOnZeroPageCount={null}
                            className="pagination"
                        />
                    </div>
                </div>
            )}

            {loading && (
                <div className="flex items-center justify-center ">
                    <MoonLoader size={50} speedMultiplier={0.4} />
                </div>
            )}
        </div>
    );
}

export default ManagePosts;
