import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css';

const ResultsContainer = ({ suggestedNames, headerExpanded }) => {
    const suggestedNamesJSX = suggestedNames.map((name) => {
        return <NameCard key={name} suggestedName={name} />;
    });

    return <div className="results-container">{suggestedNamesJSX}</div>;
};

export default ResultsContainer;
