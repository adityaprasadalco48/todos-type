import React from 'react';
import { PersonProps } from './helper/Types';

export default function Person({
  name,
  birthDat: birthDate,
  birthLocation,
}: PersonProps): JSX.Element {
  return (
    <div>
      <div>Name: {name}</div>
      <div>Birth Date: {birthDate.toISOString()}</div>
      <div>Loc Latitude: {birthLocation.latitude}</div>
      <div>Loc Longitude: {birthLocation.longitude}</div>
      <div>Loc Height: {birthLocation.height}</div>
    </div>
  );
}
