import React from 'react';

function LinkEmail(props) {
  return props.email ? (
    <a href={`mailto:${props.email}`}>
      {props.email}
    </a>
  ): '';
}