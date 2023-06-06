import {useEffect} from "react";
import Chat from "./pages/chat/Chat";
import '../assets/styles/null.scss'
import './App.scss'
import {useDispatch} from "react-redux";
import {Route, Routes} from "react-router";
import Authorization from "./auth/Authorization";
import Login from "./auth/login/login";
import Registration from "./auth/registration/Registration";
import PrivatePages from "./pages/PrivatePages";
import Users from "./pages/users/Users";
import NotFound from "./pages/404 (not-found)/NotFound";

function App() {
    // Находим диспетчера (позволяет изменять состояние)
    let dispatch = useDispatch();
    // Получаем состояние при помощи хука useSelector(), которая принимает актуальное состояние
    //let redUsers = useSelector(store => store.usersReducer.users);

    //let [users, setUsers] = React.useState([]);

    // Компонент вызывается один раз после первого рендера
    useEffect(() => firstLoadApp(), []);

    function firstLoadApp() {
        /*let url = 'http://localhost:3001/users';
        fetch(url).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                // Выбросить ошибку!
                console.log("Can't get users from database");
            }
        }).then((jsonUsers) => {
            if (jsonUsers.length > 0) {
                dispatch(addManyUserAction(jsonUsers))
            } else {
                console.log("Don't have any user");
            }
        }).catch(ex => {
            console.log(ex)
        });*/
    }

    return (
        <Routes>
            <Route path={'/'} element={<PrivatePages/>}>
                <Route path={'chat'} element={<Chat/>}/>
                <Route path={'users'} element={<Users/>}/>
            </Route>
            <Route path={'/auth'} element={<Authorization/>}>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'reg'} element={<Registration/>}/>
            </Route>
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
    )
}

export default App;