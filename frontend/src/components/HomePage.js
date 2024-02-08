import React, {Component} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
        <Router>
            <Routes>
                <Route exact path="/" element="This is Home"/>
                <Route exact path="/join" element={<RoomJoinPage/>}/>
                <Route exact path="/create" element={<CreateRoomPage/>}/>
            </Routes>
        </Router>
        )
    }
}