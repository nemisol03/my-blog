import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import Table from '~/components/Table';
import { IconAdjust, IconDelete, IconEye } from '~/components/icons';

import instance from '~/config/axiosConfig';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReactPaginate from 'react-paginate';
import userService from '~/services/userService';
import Toggle from '~/components/Toggle';

function ManageUsers() {
    const [itemOffset, setItemOffset] = useState(1);
    const [nextPage, setNextPage] = useState(1);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
 
   
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await instance.get(`users/manage/all?pageSize=2&pageNo=${nextPage}`);
                setLoading(false);
                setUsers(response.data);
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
            await userService.delete(id);
            setUsers(users.filter((user) => user.id !== id));
            toast.success('User deleted successfully');
        } catch (e) {
            console.log(e);
        }
    };

    const onDelete = (id) => {
        return confirmAlert({
            title: 'Confirm',
            message: "Are you sure you want to delete this user's id:" + id,
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

    const pageCount = Math.ceil(users.total_elements / users.page_size);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * users.page_size) % users.total_elements;

        setItemOffset(newOffset);
        setNextPage(event.selected + 1);
    };

  

    return (
        <div className="">
            <h1 className="text-primary font-medium text-2xl text-center mb-10">Manage users</h1>
            {!loading && (
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Avatar</th>
                                <th>Full name</th>
                                <th>Email</th>
                                <th>Enabled</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.data?.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>
                                        <img
                                            src={user.avatar}
                                            alt=""
                                            className="w-[66px] h-[55px] rounded object-cover"
                                        />
                                    </td>
                                    <td>
                                        <span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-primary text-gray-100 ">
                                            {user.first_name + ' ' + user.last_name}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="text-gray-500">{user.email}</span>
                                    </td>
                                    <td>
                                        <Toggle on={user.enabled} onClick={()=> {}}  />
                                    </td>
                                    <td>
                                        <span className="text-gray-500">{user.address}</span>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-x-3 text-gray-500">
                                            <Link
                                                to={`/users/${user.id}`}
                                                className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded cursor-pointer"
                                            >
                                                <IconEye />
                                            </Link>
                                            <Link
                                                to={`/manage/update-user/${user.id}`}
                                                className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded cursor-pointer"
                                            >
                                                <IconAdjust />
                                            </Link>

                                            <span
                                                onClick={() => onDelete(user.id)}
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

export default ManageUsers;
