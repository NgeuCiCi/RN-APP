import { _SvgProps } from '../../components/common/CSvg';

export namespace Types {
    export type size = number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    export interface iconOpts extends _SvgProps {
        name: string;
        postion?: string;
    }
}
