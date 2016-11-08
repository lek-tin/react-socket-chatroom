import React from "react";

const Users = React.createClass({

  render() {
    return (
      <div>
        <h4>Contacts</h4>
        <ul class="collection">
          <li class="collection-item avatar">
            <img src="images/avatar.png" alt="" class="circle" />
            <span class="name">name</span>
            <p>Last message content</p>
          </li>
          <li class="collection-item avatar">
            <img src="images/avatar.png" alt="" class="circle" />
            <span class="name">name</span>
            <p>Last message content</p>
          </li>
          <li class="collection-item avatar">
            <img src="images/avatar.png" alt="" class="circle" />
            <span class="name">name</span>
            <p>Last message content</p>
          </li>
          <li class="collection-item avatar">
            <img src="images/avatar.png" alt="" class="circle" />
            <span class="new badge">4</span>
            <span class="name">name</span>
            <p>Last message content</p>
          </li>
          <li class="collection-item avatar">
            <img src="images/avatar.png" alt="" class="circle" />
            <span class="name">name</span>
            <p>Last message content</p>
          </li>
        </ul>
      </div>
    )
  }
});

export default Users;