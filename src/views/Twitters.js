import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const twitters = [
  {
    id: 1,
    title: 'Hello Roman',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
    twitterName: 'hello_roman',
  },
  {
    id: 2,
    title: 'Redux guy',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
    twitterName: 'dan_abramov',
  },
  {
    id: 3,
    title: 'React router stuff',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
    twitterName: 'mjackson',
  },
  {
    id: 4,
    title: 'Super animacje!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days',
    twitterName: 'sarah_edo',
  },
];

const Twitters = () => (
  <GridTemplate pageType="twitters">
    <>
      {twitters.map(item => (
        <Card
          id={item.id}
          key={item.id}
          cardType="twitters"
          title={item.title}
          content={item.content}
          created={item.created}
          twitterName={item.twitterName}
        />
      ))}
    </>
  </GridTemplate>
);

export default Twitters;
