import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import * as Icons from '../../components/icon';

export default function () {
  const { t } = useTranslation();

  const match = location.pathname.match(/(.*?\/)ui/);
  const basePath = match && match[1] ? match[1] : '/';

  let baseUrl = window.serverURL;

  if (!baseUrl) {
    const match = location.pathname.match(/(.*?\/)ui/);

    baseUrl = match ? match[1] : '/';
  }

  return (
    <>
      <Header />
      <div className="typecho-login-wrap">
        <div className="typecho-login">
          <h2>{t('Login With')}</h2>
          <div className="social-accounts">
            <a href={`${baseUrl}oauth?type=google&redirect=${basePath}ui/profile`}>
              {React.createElement(Icons.google)}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
