import { useState, useEffect } from 'react';
import { ThemeType } from '../redux/reducers/Theme';

export const PREFERENCES = {
  DARK: 'dark',
  LIGHT: 'light',
};

export const values = [PREFERENCES.DARK, PREFERENCES.LIGHT];

export const makeQuery = (pref: any) => `(prefers-color-scheme: ${pref})`;

export const matchPreference = (pref: any) => window.matchMedia(makeQuery(pref));

export const getPreference = (preferences: any[]) =>
  preferences
    .map((value: any) => ({
      preference: value,
      matchMedia: matchPreference(value),
    }))
    .filter((pref: { matchMedia: { matches: any } }) => pref.matchMedia.matches)[0];

export const attachListener = (pref: { matchMedia: { removeListener: (arg0: { (): void; (): void }) => void; addListener: (arg0: () => void) => void } }, setScheme: { (value: any): void; (arg0: any): void }) => {
  let unbind: { (): void; (): void };
  const listener = () => {
    const newPref = getPreference(values);
    setScheme(newPref.preference);
    pref.matchMedia.removeListener(listener);
    // recursion
    // NOTE: we need to attach a new listener to ensure it fires on next change
    unbind = attachListener(newPref, setScheme);
  };
  pref.matchMedia.addListener(listener);
  return () => {
    if (unbind) {
      unbind();
    } else {
      pref.matchMedia.removeListener(listener);
    }
  };
};

// NOTE: outside hook to avoid this value recomputing
const initialPreference = getPreference(values);

export const useColorScheme = () => {
  const [scheme, setScheme] = useState<ThemeType>(initialPreference ? initialPreference.preference : 'light');

  useEffect(() => {
    if (!initialPreference) return;
    return attachListener(initialPreference, setScheme);
  }, []);

  return { scheme };
};