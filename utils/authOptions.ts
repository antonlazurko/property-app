import connectDB from '@/config/db';
import User from '@/models/User';
import type { NextAuthOptions } from 'next-auth';
import NextAuth, { Session } from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      await connectDB();
      const existingUser = await User.findOne({ email: profile?.email });
      if (!existingUser) {
        const userName = profile?.name?.slice(0, 20);
        await User.create({
          email: profile?.email,
          userName,
          image: (profile as { picture?: string })?.picture,
          bookmarks: [],
        });
      }
      return true;
    },
    async session({
      session,
      // token,
    }: {
      session: Session & { accessToken?: string };
      // token: import('next-auth/jwt').JWT & { accessToken?: string };
    }) {
      const user = await User.findOne({ email: session?.user?.email });

      // if (token.accessToken) session.accessToken = token.accessToken;
      return {
        ...session,
        user: {
          ...session.user,
          id: user?._id.toString(),
        },
      };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
