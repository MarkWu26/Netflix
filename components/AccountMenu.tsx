/* import { signOut } from 'next-auth/react'; */
import { SafeUser } from '@/types';
import { signOut } from 'next-auth/react';
import React from 'react';

/* import useCurrentUser from '@/hooks/useCurrentUser'; */

interface AccountMenuProps {
  visible?: boolean;
  currentUser?: SafeUser | null
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible, currentUser }) => {

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex rounded-md">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img className="w-8 rounded-md" src="/images/default-blue.png" alt="" />
          <p className="text-white text-sm group-hover/item:underline">{currentUser?.name}</p>
        </div>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div onClick={() => signOut({redirect: true, callbackUrl: '/indexHome'})} className="px-3 text-center text-white text-sm hover:underline">
        Sign out of Netflix
      </div>
    </div>
  )
}

export default AccountMenu;
