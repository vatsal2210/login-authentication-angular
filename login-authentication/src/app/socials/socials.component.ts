import { Component, OnInit } from '@angular/core';
import {
  AuthServiceConfig,
  FacebookLoginProvider
} from 'angular5-social-login';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('{1276473959177256}')
    }
  ]);
  return config;
}