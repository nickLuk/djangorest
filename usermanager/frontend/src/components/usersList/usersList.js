import React, { Fragment } from "react";


import UserItem from "./usersItem/usersItem";

const UsersList = () => {
    return(
        <Fragment>

            <div className="outer-container">
            <h1>User Manager Table</h1>
            <UserItem/>
            </div>
        </Fragment>
    )
}
export default UsersList;