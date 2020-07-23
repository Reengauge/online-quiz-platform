import React from 'react';
import axios from 'axios';

// var roomObj: string | any[];

// function getAllRooms() {
//     return axios({
//         url: 'http://34.69.228.253:3000/api/rooms/presenter/21dn9ca82dniad3/',
//         method: 'get',
//     }).then((response) => {
//         response.data.map(rooms) => ({
//             name: `${rooms.name}`,
//             roomId: `${rooms.roomId}`,
//             startTime: `${rooms.startTime}`,
//             endTime: `${rooms.endTime}`,
//         }))
//         console.log(rooms);
//         roomObj = response.data;
//         for (let i = 0; i < roomObj.length; i++) {
//             // console.log(roomObj[i]);
//         }
//     });
// }

const AdminPage: React.FunctionComponent = () => {

    // function getUsers() {
    //     axios
    //         .get("https://randomuser.me/api/?results=5")
    //         .then(response =>
    //             response.data.results.map(user => ({
    //                 name: `${user.name.first} ${user.name.last}`,
    //                 username: `${user.login.username}`,
    //                 email: `${user.email}`,
    //                 image: `${user.picture.thumbnail}`
    //             }))
    //         )
    //         .then(users => {
    //             this.setState({
    //                 users,
    //                 isLoading: false
    //             });
    //         })
    //         .catch(error => this.setState({ error, isLoading: false }));
    // }
    // // console.log(rooms);

    return (
        <div>
            <h2>Admin Page</h2>
            <input type="number" name="roomID" placeholder="Input new room ID"></input>
            <button>
                <i className="fas fa-plus icon" />
                Create new room
            </button>
            <h4>List of rooms</h4>
            {/*<table cellPadding={5}>*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <td>Key</td>*/}
            {/*        <td>Value</td>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    {*/}
            {/*        Object.keys(roomObj).map(function(element) {*/}
            {/*            return <tr>*/}
            {/*                <td>{element}</td>*/}
            {/*                /!*<td>{roomObj[element]}</td>*!/*/}
            {/*            </tr>;*/}
            {/*        })*/}
            {/*    }*/}
            {/*    </tbody>*/}
            {/*</table>*/}
            <button>
                <i className="fas fa-plus icon" />
                Create new quiz
            </button>
        </div>
    );
};

export default AdminPage;
