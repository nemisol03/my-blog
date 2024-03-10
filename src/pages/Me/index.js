import { useSelector } from 'react-redux';

function Me() {
    const { user } = useSelector((state) => state.auth);
    return (
        <div>
            hello , {user.firstName + ' ' + user.lastName}
            <img src={user.avatar} alt="" />
        </div>
    );
}
export default Me;
