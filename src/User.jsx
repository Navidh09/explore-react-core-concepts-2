import "./user.css"

export default function User({user}){
    const {name,email}=user;
    return(
        <div className="body">
            <h4>Name: {name} </h4>
            <p>Email: {email} </p>
        </div>
    )
}