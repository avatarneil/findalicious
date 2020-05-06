import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

class Lobby extends React.Component {
    constructor(props) {
        super(props);
        let roomNumber = this.props.match.params.roomNumber;
        this.state = {
            city: "Retrieving...",
            roomNumber: roomNumber,
            participants: []
        }
        this.joinRoom = this.joinRoom.bind(this);
        this.updateStateInfo = this.updateStateInfo.bind(this);
        this.startSwiping = this.startSwiping.bind(this);
    }

    componentDidMount() {
        let socket = this.props.socket;
        this.joinRoom(this.state.roomNumber);
        let parentThis = this;

        // Listen on new user joining room
        socket.on('room info', function (result) {
            parentThis.updateStateInfo(result);
        });

        // Listen on whether joined invalid room
        socket.on('general error', () => {
            parentThis.props.history.push("/rooms");
        });

        // Listen on user disconnect
        socket.on('user disconnect', (result) => {
            parentThis.updateStateInfo(result);
        });

        // Listen on attempting to join an already active room
        socket.on('room active', () => {
            alert("Room " + this.state.roomNumber + " has already begun swiping!");
            parentThis.props.history.push("/");
        });

        // Listen on room started swiping
        socket.on('room started swiping', () => {
            parentThis.props.history.push('/swiping', { roomNumber: this.state.roomNumber });
        });

        // Heart beat to prevent socket going idle
        socket.on('ping', function (data) {
            console.log("ping received from server");
            socket.emit('pong', { beat: 1 });
        });
    }

    updateStateInfo(result) {
        let data = JSON.parse(result);
        // Set participants
        let participantsObjectArray = data.participants;
        let participantsArray = [];
        for (let i = 0; i < participantsObjectArray.length; i++) {
            participantsArray.push(participantsObjectArray[i].socketID)
        }
        this.setState({ participants: participantsArray });
        // Set city
        this.setState({ city: data.city });
        // Set radius
        this.setState({ radius: data.radius });
    }

    joinRoom(roomNumber) {
        let socket = this.props.socket;
        socket.emit('room', roomNumber);
    }

    startSwiping() {
        let socket = this.props.socket;
        socket.emit('initiate swiping');
    }

    render() {
        return (
            <div className="main-page">
                <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
                <h2> Room {this.state.roomNumber} </h2>
                <div style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                    <h4> Looking for restaurants in</h4>
                    <FontAwesomeIcon icon={faLocationArrow} size="xs" />
                    <h4 style={{ display: "inline-block", margin: "2px" }}>{this.state.city}</h4>
                    <h4 style={{ padding: "0px" }}>
                        {this.state.radius ? "(" + this.state.radius + "KM radius)" : ""}
                    </h4>
                </div>
                <h4>
                    {this.state.participants.length} user{(this.state.participants.length === 1) ? "" : "s"} in this room
                </h4>

                {/* TODO: DISABLE WHEN NOT ENTERED ROOM FULLY */}
                <button
                    onTouchStart=""
                    onClick={this.startSwiping}>
                    EVERYONE IS IN
                </button>
            </div>
        )
    }
}

export default Lobby;