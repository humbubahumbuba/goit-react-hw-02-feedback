import React from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Container } from 'components/App.styled';
import { Notification } from '../Notification/Notification';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = event => {
    const value = event.target.value;

    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const stateValues = Object.values(this.state);
    const totalFeedbacks = stateValues.reduce((acc, value) => acc + value, 0);

    return totalFeedbacks;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    const positivePercentage = Math.round(
      (good / this.countTotalFeedback()) * 100
    );

    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;

    // const positivePercentage = Math.round((good / total) * 100);

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleBtnClick}
          />
        </Section>

        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Container>
    );
  }
}
