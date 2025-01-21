function UserCard (props) {
    console.log(props)
    return (
        <div>
            <p>Name:{props. name} </p>
            <p>Age:{props. age} </p>
            <MyButton text={"Choose hero"}/>
        </div>
    )
}


export default UserCard;