import React from 'react';
import {View} from 'react-native';
import {
  ProfileListItem,
  ProfileListItemProps,
} from '../components/ProfileListItem';
import {DefaultLayout} from '../layouts/default';

type ProfileProps = {};

export const Profile: React.FC<ProfileProps> = ({}) => {
  const Items: ProfileListItemProps[] = [
    {
      bgColor: '#E9EEFA',
      color: '#4B72DE',
      icon: 'credit-card',
      title: 'Payment Settings',
    },
    {
      bgColor: '#FDECDF',
      color: '#F4984F',
      icon: 'navigation-2',
      title: 'Settings',
    },
    {
      bgColor: '#ECEDF9',
      color: '#2E3A8D',
      icon: 'settings',
      title: 'My Location',
    },
    {
      bgColor: '#E3F6ED',
      color: '#36C198',
      icon: 'shield',
      title: 'Pivacy Policy',
    },
    {
      bgColor: '#FFE5E5',
      color: '#FF2426',
      icon: 'log-out',
      title: 'Logout',
    },
  ];
  return (
    <DefaultLayout>
      <>
        {Items?.map((item: ProfileListItemProps) => (
          <ProfileListItem key={item?.icon} {...item} />
        ))}
      </>
    </DefaultLayout>
  );
};
