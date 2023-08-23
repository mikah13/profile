import NextAuth, { AuthOptions, DefaultSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import type { UserRole } from "@prisma/client";
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: UserRole;
    } & DefaultSession["user"];
  }
}

export const nextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "github_id",
      clientSecret: process.env.GITHUB_SECRET || "github_secret",
    }),
    // ...add more providers here
  ],

  
} satisfies AuthOptions;
const handler = NextAuth(nextAuthOptions);
export { handler as GET, handler as POST };
