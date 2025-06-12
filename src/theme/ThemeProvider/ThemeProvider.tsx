import { generateBackgrounds, staticBackgroundStyles } from '@/theme/backgrounds';
import { generateBorderColors, generateBorderRadius, generateBorderWidths, staticBorderStyles } from '@/theme/borders';
import componentsGenerator from '@/theme/components';
import { generateFontColors, generateFontSizes, staticFontStyles } from '@/theme/fonts';
import { generateGutters, staticGutterStyles } from '@/theme/gutters';
import Styles from '@/theme/styles';
import generateConfig from '@/theme/ThemeProvider/generateConfig';
import type { FulfilledThemeConfiguration, Variant } from '@/theme/types/config';
import type { ComponentTheme, Theme } from '@/theme/types/theme';
import type { PropsWithChildren } from 'react';
import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import type { MMKV } from 'react-native-mmkv';
import Images from '../assets/images';
import Svgs from '../assets/svg';
import Metrics from '../assets/metrics';

type Context = {
  changeTheme: (variant: Variant) => void;
} & Theme;

export const ThemeContext = createContext<Context | undefined>(undefined);

type Props = PropsWithChildren<{
  storage: MMKV;
}>;

function ThemeProvider({ children = false, storage }: Props) {
  // Current theme variant
  const [variant, setVariant] = useState((storage.getString('theme') as Variant) || 'default');

  // Initialize theme at default if not defined
  useEffect(() => {
    console.log('TCL: SangBT: storage', storage);
    const appHasThemeDefined = storage.contains('theme');
    if (!appHasThemeDefined) {
      storage.set('theme', 'default');
      setVariant('default');
    }
  }, [storage]);

  const changeTheme = useCallback(
    (nextVariant: Variant) => {
      setVariant(nextVariant);
      storage.set('theme', nextVariant);
    },
    [storage],
  );

  // Flatten config with current variant
  const fullConfig = useMemo(() => {
    return generateConfig(variant) satisfies FulfilledThemeConfiguration;
  }, [variant]);

  const Fonts = useMemo(() => {
    return {
      ...generateFontSizes(),
      ...generateFontColors(fullConfig),
      ...staticFontStyles,
    };
  }, [fullConfig]);

  const Backgrounds = useMemo(() => {
    return {
      ...generateBackgrounds(fullConfig),
      ...staticBackgroundStyles,
    };
  }, [fullConfig]);

  const Gutters = useMemo(() => {
    return {
      ...generateGutters(fullConfig),
      ...staticGutterStyles,
    };
  }, [fullConfig]);

  const Borders = useMemo(() => {
    return {
      ...generateBorderColors(fullConfig),
      ...generateBorderRadius(),
      ...generateBorderWidths(),
      ...staticBorderStyles,
    };
  }, [fullConfig]);

  const navigationTheme = useMemo(() => {
    return {
      colors: fullConfig.navigationColors,
      dark: variant === 'dark',
    };
  }, [variant, fullConfig.navigationColors]);

  const theme = useMemo(() => {
    return {
      Backgrounds,
      Borders,
      Colors: fullConfig.colors,
      Fonts,
      Gutters,
      variant,
      Styles,
      Svgs,
      Images,
      Metrics
    } satisfies ComponentTheme;
  }, [variant, Fonts, Backgrounds, Borders, fullConfig.colors, Gutters]);

  const components = useMemo(() => {
    return componentsGenerator(theme);
  }, [theme]);

  const value = useMemo(() => {
    return { ...theme, changeTheme, components, navigationTheme };
  }, [theme, components, navigationTheme, changeTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
