import { authOptions } from '@/utils/authOptions';
import type { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';

export const getSessionUser = async (): Promise<{
  user: Session['user'];
  userId: string;
} | null> => {
  const session = (await getServerSession(authOptions)) as Session | null;

  if (!session || !session.user) return null;

  return {
    user: session.user,
    userId: session.user.id,
  };
};
