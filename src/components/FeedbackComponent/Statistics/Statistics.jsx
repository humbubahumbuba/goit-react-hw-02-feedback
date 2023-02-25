import React from 'react';
import PropTypes from 'prop-types';
import { StatList, StatItem, StatText } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <StatList>
        <StatItem>
          <p>
            Good: <StatText>{good}</StatText>
          </p>
        </StatItem>
        <StatItem>
          <p>
            Neutral: <StatText>{neutral}</StatText>
          </p>
        </StatItem>
        <StatItem>
          <p>
            Bad: <StatText>{bad}</StatText>
          </p>
        </StatItem>
        <StatItem>
          <p>
            Total: <StatText>{total}</StatText>
          </p>
        </StatItem>
        <StatItem>
          <p>
            Positive feedback:{' '}
            <StatText>{total > 0 ? positivePercentage : '0'}%</StatText>
          </p>
        </StatItem>
      </StatList>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
