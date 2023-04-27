import "../stylesheets/CanvaBase.css";
import FormAdd from "./FormAdd";
import TagUser from "./TagUser";
import { useContext } from "react";
import { UsersContext } from "../context/ContextProvider";

function EditView() {
    const { users, setUsers } = useContext(UsersContext);

    const eraseUser = (id) => {
        const newUsers = users.filter((user) => user.id != id);
        setUsers(newUsers);
    };

    return (
        <div className="container">
            <h1 className="title">$hareXpenses</h1>
            <FormAdd edit={true} />
            {users.map((user) => (
                <TagUser
                    name={user.name}
                    expenses={user.expenses}
                    key={user.id}
                    id={user.id}
                    erase={eraseUser}
                    isEdit={user.edit}
                />
            ))}
        </div>
    );
}

export default EditView;
