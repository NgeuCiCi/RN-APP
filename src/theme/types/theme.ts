import Styles from '../styles';
import type { Backgrounds } from './backgrounds';
import type { Borders } from './borders';
import type { Variant } from './config';
import type { Fonts } from './fonts';
import type { Gutters } from './gutters';
import type { Theme as NavigationTheme } from '@react-navigation/native';
import type componentGenerators from '@/theme/components';
import type { Colors } from '@/theme/types/colors';

export type Theme = {
  Backgrounds: Backgrounds;
  Borders: Borders;
  Colors: Colors;
  components: ReturnType<typeof componentGenerators>;
  Fonts: Fonts;
  Gutters: Gutters;
  Styles: typeof Styles;
  navigationTheme: NavigationTheme;
  variant: Variant;
  Svgs: any;
  Images: any;
  Metrics: any;
};

export type ComponentTheme = Omit<Theme, 'components' | 'navigationTheme'>;
