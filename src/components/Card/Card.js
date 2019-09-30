import React from 'react';
import './Card.css';
import Card from 'react-bootstrap/Card';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Image from 'react-bootstrap/Image'

const card = props => (
	<Card className="card" class="container">
  		<Card.Img variant="top" className="imageHolder" src={require('./profile.JPG')} roundedCircle/>
  		<Card.Body>
    		<Card.Title className="card_title">{props.title}</Card.Title>
    		<Card.Subtitle className="card_subtitle" style={{color:'#6e6e6e'}}>{props.subtitle}</Card.Subtitle>
    		<Card.Text style={{color:'#9ca4ab'}} className="card_content">
      			{props.text}
    		</Card.Text>
    		<button style={{color:'#20B2AA'}} className="card-button">{props.button}</button>
  		</Card.Body>
	</Card>
);
export default card;