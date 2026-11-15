// @vitest-environment jsdom
import React from 'react';
import { MotionConfig } from 'motion/react';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { ObservatoryProvider } from '../context/ObservatoryContext';
import { AboutPage } from './AboutPage';
import { ComparePage } from './ComparePage';
import { LocationDetailPage } from './LocationDetailPage';
import { MarsPage } from './MarsPage';
import { MoonPage } from './MoonPage';
import { NotFoundPage } from './NotFoundPage';
import { SettingsPage } from './SettingsPage';

const renderPage = (ui: React.ReactElement, hash = '') => {
  window.location.hash = hash;
  return render(
    <MotionConfig reducedMotion="always">
      <ObservatoryProvider>{ui}</ObservatoryProvider>
    </MotionConfig>
  );
};

beforeEach(() => {
  window.localStorage.clear();
  window.localStorage.setItem('terratwin_lang_50', 'en');
});
afterEach(cleanup);

describe('pages render under jsdom', () => {
  it.each([
    ['NotFoundPage', <NotFoundPage key="a" />],
    ['AboutPage', <AboutPage key="b" />],
    ['SettingsPage', <SettingsPage key="c" />],
    ['MoonPage', <MoonPage key="d" />],
    ['MarsPage', <MarsPage key="e" />],
    ['LocationDetailPage', <LocationDetailPage key="f" />],
  ])('%s renders a heading', (_name, ui) => {
    const { container } = renderPage(ui);
    expect(container.querySelector('h1, h2')).not.toBeNull();
  });

  it('shows the 404 copy', () => {
    renderPage(<NotFoundPage />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/off the map/i);
  });

  it('Compare page withholds composite score (NA) when cross-planet axes are unestablished', () => {
    const { container } = renderPage(<ComparePage />, '#/compare/atacama/mars-jezero');
    const text = container.textContent ?? '';
    expect(text).toMatch(/Reliable Score Withheld/);
    expect(text).toMatch(/NA/);
  });

  it('Location page shows Null / Missing quality labels for unestablished metrics', () => {
    const { container } = renderPage(<LocationDetailPage />, '#/location/iceland');
    expect(container.textContent ?? '').toMatch(/Null \/ Missing/);
  });

  it('does not render invented mineral percentages', () => {
    const { container } = renderPage(<LocationDetailPage />, '#/location/atacama');
    expect(container.textContent ?? '').not.toMatch(/\b\d{1,2}%\s*$/m);
    expect(container.textContent ?? '').toMatch(/not quantified/i);
  });

  it('renders Arabic with RTL and the Arabic quality labels', () => {
    window.localStorage.setItem('terratwin_lang_50', 'ar');
    const { container } = renderPage(<ComparePage />, '#/compare/atacama/mars-jezero');
    expect(document.documentElement.dir).toBe('rtl');
    expect(document.documentElement.lang).toBe('ar');
    const text = container.textContent ?? '';
    expect(text).toContain('تم حجب النتيجة الموثوقة');
    expect(text).toContain('بيانات ناقصة');
  });
});
