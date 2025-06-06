import { _SvgProps } from '../components/common/CSvg';

export const NAME_STACKS = [
    { name: 'Order', title: 'Đơn hàng', icon: 'IOrder', screens: [{ screen: 'InfoUserScreen', title: 'Đơn hàng 1' }] },
    {
        name: 'Notification',
        title: 'Thông báo',
        icon: 'INotification',
        screens: [{ screen: 'HomeScreen', title: 'Thông báo 1' }],
    },
    {
        name: 'Scheduled',
        title: 'Lịch hẹn',
        icon: 'IScheduled',
        screens: [{ screen: 'HomeScreen2', title: 'Lịch hẹn 1' }],
    },
    {
        name: 'Account',
        title: 'Tài khoản',
        icon: 'IAccount',
        screens: [
            { screen: 'AccountScreen', title: 'Tài khoản 1' },
            // { screen: 'InfoUserScreen', title: 'Lịch hẹn 1' },
        ],
    },
];

export const NAME_BREAKPOINT: Types.size[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
export const SIZE_DEFAULT: Types.size = 'md';
export const SVG_SIZE_DEFAULT = 20;

export namespace Types {
    export type size = number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    export interface iconOpts extends _SvgProps {
        name: string;
        postion?: string;
    }
    export interface SvgComponentProps {
        height?: number;
        width?: number;
        color: string;
    }
}
