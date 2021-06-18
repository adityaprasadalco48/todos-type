import React, { useEffect, useState } from 'react';
import { PostsData, UserData } from './helper/Types';

export default function UseEffectHooks(): JSX.Element {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState<PostsData[]>([]);
  const [users, setUsers] = useState<Array<UserData>>([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}?id=1`)
      .then((response) => response.json())
      .then((json) =>
        resourceType === 'posts' ? setItems(json) : setUsers(json)
      );
  }, [resourceType]);
  return (
    <div>
      <div>
        <button type="button" onClick={() => setResourceType('posts')}>
          Posts
        </button>
        <button type="button" onClick={() => setResourceType('users')}>
          Users
        </button>
        {/* <button onClick={() => setResourceType('comments')}>comments</button> */}
      </div>
      <h3>{resourceType}</h3>
      {resourceType === 'posts' ? (
        <div>
          {items.map((item) => (
            <div>
              <div>UserId :{item.userId}</div>
              <div>Id :{item.id}</div>
              <div>Title :{item.title}</div>
              <div>Body :{item.body}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {users &&
            users.map((item) => (
              <div>
                <div>Name :{item.name}</div>
                <div>Email :{item.email}</div>
                <h3>Address of user</h3>
                <div>Street :{item.address.street}</div>
                <div>City :{item.address.city}</div>
                <div>Zipcode :{item.address.zipcode}</div>
                <h3>Geographical Location of Address</h3>
                <div>Latitude :{item.address.geo.lat}</div>
                <div>Longitude :{item.address.geo.lng}</div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
