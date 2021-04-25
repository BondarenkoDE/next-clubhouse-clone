import React from 'react';
import { useRouter } from 'next/router';
import { Profile } from '../../components/Profile';
import { Header } from '../../components/Header';

export default function RoomPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <div className="container mt-30">
        <Profile
          avatarUrl="https://klike.net/uploads/posts/2018-06/1528720172_1.jpg"
          fullname="Bondarenko Dmitriy"
          username="bondarenko"
          about="Test text"
        />
      </div>
    </>
  );
}
