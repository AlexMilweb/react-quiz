import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../../hoc/Layout/Layout';
import Quiz from '../../containers/Quiz/Quiz';
import QuizList from '../../containers/QuizList/QuizList';
import Auth from '../../containers/Auth/Auth';
import QuizCreator from '../../containers/QuizCreator/QuizCreator';

export default () => (
  <Layout>
    <Switch>
      <Route path="/" component={QuizList} exact />
      <Route path="/auth" component={Auth} />
      <Route path="/quiz-creator" component={QuizCreator} />
      <Route path="/quiz/:id" component={Quiz} />
    </Switch>
  </Layout>
);
