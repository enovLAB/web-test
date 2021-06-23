import React  from 'react';
import styled from 'styled-components';

const DefinitionComponent = ({ item }) => {
  return (
    <DefinitionContainer>
      <span>{item.definition}</span>
      <span>{item.example}</span>
    </DefinitionContainer>
  );
};

/**
 * endpoint to search for word definition: `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
 */
export const TestComponent = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span>Search a word:</span>
      <input type="text" />
      <button>Search</button>
    </div>
  );
};

const DefinitionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;