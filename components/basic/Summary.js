import React from 'react';
import markdownToTxt from 'markdown-to-txt';
import { sentenceCase } from "sentence-case";
import { textShaver } from 'text-shaver';

function Summary(props) {
  return (
    <div className="summary">
      {textShaver(markdownToTxt(props.children.props.children),{mode: 'sentences', limit: 3, suffix: '(..)'})}
    </div>
  );
}

export default Summary