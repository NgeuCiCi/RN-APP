import type { ComponentTheme } from '@/theme/types/theme';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
// import type { ComponentTheme } from '@/theme/types/theme';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AllStyle extends Record<string, AllStyle | ImageStyle | TextStyle | ViewStyle> { }

export default ({ Backgrounds, Fonts, Styles }: ComponentTheme) => {
  return {
    buttonCircle: {
      ...Styles.rowCenter,
      ...Backgrounds.purple100,
      ...Fonts.gray400,
      borderRadius: 35,
      height: 64,
      width: 64,
    },
    circle250: {
      borderRadius: 140,
      height: 250,
      width: 250,
    },
  } as const satisfies AllStyle;
};
