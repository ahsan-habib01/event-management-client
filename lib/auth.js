import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'you@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // This is demo implementation
        // In production, validate against your database
        if (credentials?.email && credentials?.password) {
          // Demo user for testing
          if (
            credentials.email === 'demo@example.com' &&
            credentials.password === 'password123'
          ) {
            return {
              id: '1',
              name: 'Demo User',
              email: 'demo@example.com',
            };
          }

          // For any other email/password, create a user (demo purposes only)
          // In production, check database here
          return {
            id: Date.now().toString(),
            name: credentials.email.split('@')[0],
            email: credentials.email,
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
