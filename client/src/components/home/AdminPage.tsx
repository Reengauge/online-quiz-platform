import React from 'react';
import axios from 'axios';

// function getAllRooms() {
//     return axios({
//         url: 'http://localhost:3000/api/rooms/' + String(choiceNum),
//         method: 'get',
//     }).then((response) => {
//         // console.log(response);
//         return response.data;
//     });
// }

const AdminPage: React.FunctionComponent = () => {
    return (
        <div>
            <h2>Admin Page</h2>
            <input type="number" name="roomID" placeholder="Input new room ID"></input>
            <button>
                <i className="fas fa-plus icon" />
                Create new room
            </button>
            <h4>List of rooms</h4>
            <button>
            <i className="fas fa-plus icon" />
                Create new quiz
            </button>
        </div>
    );
};

export default AdminPage;
