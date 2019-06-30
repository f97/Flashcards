/*
 * FlashcardsPage
 *
 * Show all flashcards
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';

export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <title>FlashcardsPage</title>
        <meta name="description" content="Show all flashcards" />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </div>
  );
}
