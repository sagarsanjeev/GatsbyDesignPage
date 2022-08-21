import React, { useState, createRef } from 'react';
import './ExperienceCard.scss';
import ColorThief from 'colorthief';
import Avatar from '@material-ui/core/Avatar';
import ReactCardFlip from 'react-card-flip';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typography } from '@material-ui/core';

interface Props {
  cardInfo: any;
}

function ExperinceCard({ cardInfo }: Props) {
  const [colorArrays, setColorArrays] = useState([]);
  const [isFlipped, setIsFlipped] = useState(true);

  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function handleClick(event) {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  }

  function rgb(values) {
    console.log(cardInfo.company, values);
    return typeof values === 'undefined'
      ? null
      : 'rgb(' + values.join(', ') + ')';
  }

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item, i) => <li key={i}>{item}</li>)
      : null;
  };

  return (
    <Card style={{ margin: '20px 20px' }}>
      <CardHeader style={{ background: rgb(colorArrays) }}>
        <Row>
          <Col md={3}>
            <Avatar
              style={{ height: '55px', width: '55px', background: 'white' }}
            >
              <img
                ref={imgRef}
                src={cardInfo.companylogo}
                alt='avatar'
                style={{
                  height: '50px',
                  width: '50px',
                  objectFit: 'contain',
                  padding: cardInfo.type === 'idea' ? '5px' : '0px',
                }}
                onLoad={() => getColorArrays()}
              />
            </Avatar>
          </Col>
          <Col>
            <Row>
              <Typography
                color='textPrimary'
                style={{
                  fontSize: '0.88rem',
                  fontFamily: 'Roboto',
                  color: 'white',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '0rem',
                }}
              >
                {cardInfo.company}
              </Typography>
            </Row>
            <Row>
              <Typography
                color='textPrimary'
                style={{
                  fontSize: '0.88rem',
                  fontFamily: 'Roboto',
                  color: 'white',
                  fontWeight: 500,
                  lineHeight: 1.1,
                  letterSpacing: '0rem',
                }}
              >
                {cardInfo.role}
              </Typography>
            </Row>
          </Col>
        </Row>
      </CardHeader>
      <CardBody
        style={{
          height: '170px',
          padding: '10px',
        }}
      >
        <Typography
          color='textPrimary'
          style={{
            fontSize: '0.88rem',
            fontFamily: 'Roboto',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '0rem',
          }}
        >
          {cardInfo.desc}
        </Typography>
        {/* <ReactCardFlip isFlipped={isFlipped}>
          <div>
            This is the front of the card.
            <Button onClick={handleClick}>Click to flip</Button>
          </div>

          <div>
            This is the back of the card.
            <Button onClick={handleClick}>Click to flip</Button>
          </div>
        </ReactCardFlip> */}
      </CardBody>
      <CardFooter>
        <Typography
          color='textPrimary'
          style={{
            fontSize: '0.88rem',
            fontFamily: 'Roboto',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '0rem',
          }}
        >
          {cardInfo.location}
        </Typography>
        <Typography
          color='textPrimary'
          style={{
            fontSize: '0.88rem',
            fontFamily: 'Roboto',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '0rem',
          }}
        >
          {cardInfo.date}
        </Typography>
      </CardFooter>
    </Card>
  );
}
export default ExperinceCard;
