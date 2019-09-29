import React from 'react';
import './Card.css';
import Card from 'react-bootstrap/Card';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Image from 'react-bootstrap/Image'
/*import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';*/

const card = props => (
	<Card className="card">
  		<Card.Img variant="top" src="holder.js/100px180" roundedCircle/>
  		<Card.Body>
    		<Card.Title className="title" style={{color:"#404040"}}>{props.title}</Card.Title>
    		<Card.Subtitle>{props.subtitle}<span>&#8377;</span>{props.number}</Card.Subtitle>
    		<Card.Text>
      			{props.text}
    		</Card.Text>
    		<Button variant="outlined" style={{color:'#20B2AA'}} className="card-button">{props.button}</Button>
  		</Card.Body>
	</Card>
);
export default card;