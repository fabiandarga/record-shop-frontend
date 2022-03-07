import User from './User';

const userList = ({ users }) => {
    return (
        <table className="users-table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>E-Mail</th>
                </tr>
            </thead>
            <tbody>
                { users.map((user, idx) => {
                    const key=(idx+user.title+user.artist).replace(' ', '').toLowerCase();
                    return <User key={key} user={user}/>
                })}
            </tbody>
        </table>
    );
};

export default userList;