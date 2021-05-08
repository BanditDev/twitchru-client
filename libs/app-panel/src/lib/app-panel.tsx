import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SimpleBar from 'simplebar-react';
import { UserGroupIcon } from '@dream/icons/user-group';
import { HeartIcon } from '@dream/icons/heart';
import { UserPanel } from '@dream/user';
import { AppPanelCommunities } from '@dream/community';

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center justify-center w-12 h-12 p-2 cursor-pointer relative">
        <img src="/pepega.png" alt="" />
      </div>
    </Link>
  );
};

// const Friends = () => {
//   return (
//     <>
//       <div className="flex justify-center py-2">
//         <UserGroupIcon />
//       </div>
//       <div className="flex flex-1 w-full overflow-hidden">
//         <SimpleBar className="w-full">
//           {[...Array(50).keys()].map((k) => (
//             <CommunityInAppPanel key={k} name={`user-${k}`} title={`${k}`} />
//           ))}
//         </SimpleBar>
//       </div>
//     </>
//   );
// };

export const AppPanel = () => {
  return (
    <div className="h-screen flex flex-col flex-shrink-0 min-w-12 bg-backgorud border-r border-backgorud overflow-hidden">
      <Logo />
      <AppPanelCommunities />
      {/* <Friends /> */}
      <UserPanel />
    </div>
  );
};
