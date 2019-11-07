const user = {
  userName: "Roy Cheong Jing He",
  age: 25,

}

const getLocation = (location) => {
  if (location) {
    return <p>Location: {location}</p>;
  }
  return <h1>Unknown</h1>;
}

let templateTwo = (
  <div>
    <h1>{user.userName ? user.userName : 'Anonymous'}</h1>
    <p>Age: {user.age && user.age >= 18 ? user.age : "Underage"}</p>
    {getLocation(user.location)}
  </div>
);