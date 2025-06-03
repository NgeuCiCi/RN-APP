import { Types } from '../assets/types';

export const NAME_STACKS = [
    { name: 'Order', title: 'Đơn hàng', icon: 'IOrder', screens: [{ screen: 'AccountScreen', title: 'Đơn hàng 1' }] },
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
            { screen: 'HomeScreen1', title: 'Lịch hẹn 1' },
        ],
    },
];

export const NAME_BREAKPOINT: Types.size[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
export const SIZE_DEFAULT: Types.size = 'md';
