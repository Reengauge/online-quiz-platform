import React from 'react';
import axios from 'axios';

var roomObj;

function getAllRooms() {
    return axios({
        url: 'http://localhost:3000/api/rooms/',
        method: 'get',
    }).then((response) => {
        console.log(response);
        roomObj = response.data;
        for (let i = 0; i < roomObj.length; i++) {
            console.log(roomObj[i]);
        }
    });
}

const AdminPage: React.FunctionComponent = () => {
    getAllRooms();

    return (
        <div>
            <h2>Admin Page</h2>
            <input type="number" name="roomID" placeholder="Input new room ID"></input>
            <button>
                <i className="fas fa-plus icon" />
                Create new room
            </button>
            <h4>List of rooms</h4>
            {/*<table border={}></table>*/}
            <button>
                <i className="fas fa-plus icon" />
                Create new quiz
            </button>
        </div>
    );
};

export default AdminPage;
