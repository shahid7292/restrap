import React from 'react'
import '../App.css';
import {Jumbotron, Button} from 'react-bootstrap'

function Content() {
    return (
        <div className="container" id="home">
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default Content
