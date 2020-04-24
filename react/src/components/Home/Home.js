import React from 'react';
import JoinRoomForm from '../Rooms/JoinRoom';
//todo: import logo properly

class Home extends React.Component {

    goCreateRoom() {
        this.props.history.push("/create");
    }

    render() {
        return (
            <div className="main-page" >
                <img src={process.env.PUBLIC_URL + 'logo.png'} className="logo" alt="Chicken Tinder Icon" />
                <JoinRoomForm />
                <button
                    onTouchStart=""
                    onClick={e => {
                        this.goCreateRoom();
                    }}>
                    NEW ROOM
                </button>
            </div>
        )
    }
}

export default Home;